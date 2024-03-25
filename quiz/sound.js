import Sound from 'react-native-sound';

export const playsound=()=>{

  var playingsound = new Sound('clicksound.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + playingsound.getDuration() + 'number of channels: ' + playingsound.getNumberOfChannels());
  
    // Play the sound with an onEnd callback
    playingsound.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  });
}