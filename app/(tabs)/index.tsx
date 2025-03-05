import { HugeiconsIcon } from '@hugeicons/react-native';
import { Notification03Icon } from "@hugeicons-pro/core-stroke-standard";
import { View, SafeAreaView } from 'react-native';
export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View className='top-80'>
        <HugeiconsIcon
          icon={Notification03Icon}
          size={24}
          // color="black" works on web and mobile application
          // color="#00ff00"
          // className='text-red-700' works on web application , but not works on mobile 
          className='text-red-700'
          strokeWidth={1.5}
        /> 
      </View>
    </SafeAreaView>
  );
}
