import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../../contexts/ThemeContext';
import axios, { AxiosError } from 'axios';
import { showMessage } from 'react-native-flash-message';

interface IRating {
  name: string;
  positiveVotes: number;
  votes: number;
  id: number;
  setIsUpdate: (arg: boolean) => void;
  isUpdate: boolean;
}

type ServerError = { errors: string };

const Rating: React.FC<IRating> = ({
  name,
  votes,
  positiveVotes,
  id,
  isUpdate,
  setIsUpdate,
}) => {
  const { colors } = useTheme();
  const [isLoading, setIsLoading] = useState(false);

  const handleVote = async (isPositive: boolean) => {
    try {
      setIsLoading(true);
      const resp = await axios.post(
        `http://10.0.2.2:8080/api/v1/ice-cream/${id}/vote`,
        {
          positive: isPositive,
        },
      );
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
          message: error.response.data.errors,
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
                name="thumbs-up-outline"
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
                name="thumbs-down-outline"
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
