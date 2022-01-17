import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../../contexts/ThemeContext';
import axios, { AxiosError } from 'axios';
import { showMessage } from 'react-native-flash-message';
import { API_URL_VOTE } from '../../utils/api';

interface IRating {
  name: string;
  positiveVotes: number;
  votes: number;
  id: number;
  setIsUpdate: (arg: boolean) => void;
  isUpdate: boolean;
  voted: string | null;
}

type ServerError = { errors: string };

const Rating: React.FC<IRating> = ({
  name,
  votes,
  positiveVotes,
  id,
  isUpdate,
  setIsUpdate,
  voted,
}) => {
  const { colors } = useTheme();
  const [isLoading, setIsLoading] = useState(false);

  const handleVote = async (isPositive: boolean) => {
    try {
      setIsLoading(true);
      const resp = await axios.post(`${API_URL_VOTE}${id}/vote`, {
        positive: isPositive,
      });
      if (resp.status === 204) {
        setIsLoading(false);
        setIsUpdate(!isUpdate);
        showMessage({
          message: 'You successfully voted!',
          type: 'success',
        });
      }
      return resp;
    } catch (err) {
      const error = err as AxiosError<ServerError>;
      if (error.response) {
        setIsLoading(false);
        showMessage({
          message: error.response.data.errors[0],
          type: 'warning',
        });
      }
    }
  };

  return (
    <View>
      <View
        style={{
          backgroundColor: '#0A9FDF',
          height: 70,
          marginTop: 30,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <View style={{ width: '50%' }}>
          <Text style={{ color: 'white', fontSize: 20 }}>{name}</Text>
        </View>
        <TouchableOpacity
          onPress={() => handleVote(true)}
          disabled={isLoading}
          style={{
            backgroundColor: colors.background,
            width: 75,
            height: 35,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color="#0A9FDF" />
          ) : (
            <>
              <Icon
                style={{ marginRight: 5 }}
                name={
                  voted == null || voted == 'down'
                    ? 'thumbs-up-outline'
                    : 'thumbs-up'
                }
                size={25}
                color="#21B049"
              />
              <Text style={{ color: colors.text }}>{positiveVotes}</Text>
            </>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleVote(false)}
          style={{
            backgroundColor: colors.background,
            width: 75,
            height: 35,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color="#0A9FDF" />
          ) : (
            <>
              <Icon
                style={{ marginRight: 5 }}
                name={
                  voted == null || voted == 'up'
                    ? 'thumbs-down-outline'
                    : 'thumbs-down'
                }
                size={25}
                color="#EE3636"
              />
              <Text style={{ color: colors.text }}>
                {votes - positiveVotes}
              </Text>
            </>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Rating;
