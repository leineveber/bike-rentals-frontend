import React, { useState } from "react";
import { ImageBackground } from "react-native";
import { Button, TextInput } from "react-native-paper";
import styled from "styled-components/native";
import { Center } from "../../../common/components/Center/center.component";
import { Container } from "../../../common/components/Container/container.component";
import { Spacer } from "../../../common/components/Spacer/spacer.component";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AccountStackParamList } from "../../account/screens/account.screen";
import { useLogin } from "../hooks/useLogin";

const Image = styled(ImageBackground)`
  flex: 1;
`;

const Input = styled(TextInput)`
  opacity: 0.9;
  width: 100%;
`;

const SpacerView = styled(Spacer)`
  width: 100%;
`;

const LoginButton = styled(Button)`
  background-color: #fff;
  opacity: 0.8;
`;

const SignupButton = styled(Button)`
  ${(props) => props.disabled && "background-color: #909090"};
`;

type Props = NativeStackScreenProps<AccountStackParamList, "Login">;

export const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutateAsync: login } = useLogin();

  return (
    <Image
      source={{
        uri: "https://res.cloudinary.com/lapkinthegod/image/upload/v1668862112/w213_b7idqn.jpg",
      }}
      resizeMode="cover"
    >
      <Container>
        <Center>
          <SpacerView position="bottom" size="lg">
            <Input placeholder="Email" value={email} onChangeText={setEmail} />
          </SpacerView>

          <SpacerView position="bottom" size="lg">
            <Input
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </SpacerView>

          <SpacerView position="bottom" size="xl">
            <SignupButton
              disabled={!password || !email}
              mode="contained"
              onPress={() => {
                login({ email, password });
              }}
            >
              Log in
            </SignupButton>
          </SpacerView>

          <LoginButton
            mode="outlined"
            onPress={() => navigation.navigate("Signup")}
          >
            Don't have an account? Sign up
          </LoginButton>
        </Center>
      </Container>
    </Image>
  );
};
