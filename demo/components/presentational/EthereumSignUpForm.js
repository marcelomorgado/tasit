import React from "react";
import { Button, StyleSheet, View, Text, TextInput } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { Account } from "tasit-sdk";

export default class EthereumSignUpForm extends React.Component {
  state = {
    text: "",
    address: "",
  };

  handleAsync = async () => {
    const wallet = await Account.create();
    this.setState({ address: wallet.address });
    console.log("Async button clicked");
  };

  handleSync = () => {
    this.setState({ address: "0x" });
    console.log("Sync button clicked");
  };

  render() {
    return (
      <React.Fragment>
        <View style={styles.userRow}>
          <View style={styles.userInputView}>
            <TextInput
              autoCorrect={false}
              autoCapitalize="none"
              style={styles.userInput}
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
              placeholder="username"
            />
          </View>
          <View style={styles.ensView}>
            <Text style={styles.ensText}>{`.tasitid.eth`}</Text>
          </View>
        </View>
        <View style={styles.buttonView}>
          <Button title="Aync" onPress={() => this.handleAsync()} />
          <Button title="Sync" onPress={() => this.handleSync()} />
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  userRow: { flexDirection: "row" },
  userInputView: { flex: 1, alignItems: "flex-end" },
  userInput: {
    justifyContent: "flex-start",
    width: responsiveWidth(28),
    fontSize: responsiveFontSize(3),
  },
  ensView: { flex: 1 },
  ensText: { justifyContent: "flex-end", fontSize: responsiveFontSize(3) },
  buttonView: {
    flexDirection: "row",
    marginTop: responsiveHeight(5),
  },
});
