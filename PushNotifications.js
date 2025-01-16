import PushNotification from 'react-native-push-notification';

const scheduleMedicationReminder = () => {
  PushNotification.localNotificationSchedule({
    message: 'Time to take your medication!',
    date: new Date(Date.now() + 60 * 1000), // This will fire 1 minute from now (for testing)
  });
};

// Call this function when setting up the reminder in your Medication screen

## this needs to be configured for iOS/Android separately

