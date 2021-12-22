import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Modal,
} from 'react-native';

const ModelExample = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <SafeAreaView>
      <View>
        <Modal 
        animationType='slide'
        transparent = {false}
        visible = {showModal}
        >
            <View>
                <Text>
                    Modal is open
                </Text>
                <Button
                title='Click to close modal'
                onPress={setShowModal(!showModal)}
                />
            </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};
