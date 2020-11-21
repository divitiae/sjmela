import React, { PureComponent } from "react";
import { View, Dimensions } from "react-native";
import { connect } from "react-redux";
import configureApp from "../../../configureApp.json";
import appJson from "../../../app.json";
import {
  FormFirstLogin,
  WilWebView,
  LostPasswordModal,
  FBButton,
} from "../dumbs";
import {
  login,
  loginFb,
  getAccountNav,
  getShortProfile,
  getMyProfile,
  setUserConnection,
  getMessageChatNewCount,
  setDeviceTokenToFirebase,
  getNotificationAdminSettings,
  setNotificationSettings,
  loginApple,
  getProductsCart,
  loginWithOTP,
} from "../../actions";
import { FontIcon, LoadingFull } from "../../wiloke-elements";
import AppleButton from "../dumbs/AppleButton/AppleButton";
import { majorVersionIOS } from "../smarts/LoginFormContainer";
import { ScrollView } from "react-native-gesture-handler";
import { screenHeight } from "../../constants/styleConstants";
import OtpInputs from "../../wiloke-elements/components/atoms/OTPInput";
import ModalQRCode from "../dumbs/ModalQRCode/ModalQRCode";

const {
  title: firstLoginTitle,
  text: firstLoginText,
  skipButtonText,
} = configureApp.loginScreenStartApp;

class FirstLoginScreen extends PureComponent {
  state = {
    isLoginLoading: false,
    isLoadingFbLogin: false,
    fbLoginErrorMessage: "",
    modalVisible: false,
    loadingApple: false,
    otpCode: "",
    isOTPVisible: false,
    loadingButton: false,
  };

  _handleSubmitCode = async () => {
    await this.setState({
      loadingButton: true,
    });
    const { otpCode } = this.state;
    const { loginWithOTP } = this.props;
    await loginWithOTP(otpCode);
    this._getInfo();
  };

  _handleLoginDefault = async (results) => {
    const { login } = this.props;
    this.setState({
      isLoginLoading: true,
    });
    await login(results);
    const { auth } = this.props;
    if (auth.nextOTP) {
      this.setState({
        isOTPVisible: true,
        isLoginLoading: false,
      });
      return;
    }
    this._getInfo();
  };

  _handleLoginFb = async (data, token) => {
    const { loginFb } = this.props;
    await this.setState({ isLoadingFbLogin: true });
    await loginFb(data.id, token);
    const { auth } = this.props;
    if (auth.nextOTP) {
      this.setState({
        isOTPVisible: true,
        isLoadingFbLogin: false,
      });
      return;
    }
    this._getInfo();
  };

  _handleLoginFbError = (errorType) => {
    const { translations } = this.props;
    this.setState({
      fbLoginErrorMessage: translations[errorType],
    });
  };

  _handleLoginApple = async (credential) => {
    const { loginApple } = this.props;
    const { authorizationCode, email, identityToken } = credential;
    await this.setState({
      isLoadingFbLogin: true,
    });
    await loginApple(authorizationCode, identityToken, email);
    const { auth } = this.props;
    console.log(auth.nextOTP);
    if (auth.nextOTP) {
      this.setState({
        isOTPVisible: true,
        isLoadingFbLogin: false,
      });
      return;
    }
    if (!auth.token) {
      Alert.alert(auth.message);
      this.setState({
        isLoadingFbLogin: false,
      });
      return;
    }
    this._getInfo();
  };

  _getInfo = async () => {
    const {
      getAccountNav,
      getMyProfile,
      getShortProfile,
      setUserConnection,
      getMessageChatNewCount,
      deviceToken,
      setDeviceTokenToFirebase,
      navigation,
      getProductsCart,
    } = this.props;
    getAccountNav();
    getMyProfile();
    await getShortProfile();
    const { shortProfile, auth } = this.props;
    const myID = shortProfile.userID;
    const { firebaseID } = shortProfile;
    if (auth.isLoggedIn && myID) {
      setUserConnection(myID, true);
      getMessageChatNewCount(myID);
      setDeviceTokenToFirebase(myID, firebaseID, deviceToken);
      getProductsCart(auth.token);
      await this._handleNotificationSettings(myID);
      navigation.navigate("HomeScreen");
    }
    this.setState({
      isLoginLoading: false,
      isLoadingFbLogin: false,
      isOTPVisible: false,
      loadingButton: false,
    });
    Keyboard.dismiss();
  };

  _handleNotificationSettings = async (myID) => {
    await this.props.getNotificationAdminSettings();
    const { notificationAdminSettings } = this.props;
    await this.props.setNotificationSettings(
      myID,
      notificationAdminSettings,
      "start"
    );
  };

  _handleSkip = () => {
    const { navigation } = this.props;
    navigation.navigate("HomeScreen");
  };

  _handleNavigateRegister = () => {
    const { navigation } = this.props;
    navigation.navigate("AccountScreen", {
      activeType: "register",
    });
  };

  _handleNavigateLostPassword = () => {
    const url = "https://wilcity.com/login/?action=rp";
    this.setState({
      modalVisible: true,
    });
  };

  _handleGoBack = () => {
    this.setState({
      modalVisible: false,
    });
  };

  _renderBottom = () => {
    const { settings } = this.props;
    const iOsSettings = appJson.expo.ios;
    console.log(iOsSettings, 123);
    const { isLoadingFbLogin, loadingApple } = this.state;
    const { oFacebook } = settings;
    return (
      <View style={{ width: "100%" }}>
        {!!oFacebook && oFacebook.isEnableFacebookLogin && (
          <FBButton
            radius="round"
            isLoading={isLoadingFbLogin}
            appID={oFacebook.appID}
            onAction={this._handleLoginFb}
            onError={this._handleLoginFbError}
          />
        )}
        {Platform.OS === "ios" &&
          majorVersionIOS > 12 &&
          iOsSettings.usesAppleSignIn && (
            <View style={{ marginTop: 10 }}>
              <AppleButton
                onAction={this._handleLoginApple}
                isLoading={false}
                buttonStyle={configureApp.appleColor}
              />
            </View>
          )}
      </View>
    );
  };

  _renderModalOTP = () => {
    const { isOTPVisible, loadingButton } = this.state;
    const { translations, settings, loginError } = this.props;
    return (
      <ModalQRCode
        isVisible={isOTPVisible}
        headerIcon="key"
        headerTitle={translations["twofactorauth"]}
        colorPrimary={settings.colorPrimary}
        cancelText={translations.cancel}
        submitText={translations.enterCode}
        onBackdropPress={() => this.setState({ isOTPVisible: false })}
        onSubmitAsync={this._handleSubmitCode}
        loadingButton={loadingButton}
      >
        <View>
          <OtpInputs
            onChangeCode={(code) => this.setState({ otpCode: code })}
          />
          {this.props.auth.status === "error" && (
            <View style={{ marginTop: -8 }}>
              <P style={{ color: Consts.colorQuaternary, fontSize: 12 }}>
                {translations[this.props.auth.msg]}
              </P>
            </View>
          )}
        </View>
      </ModalQRCode>
    );
  };

  render() {
    const { translations, settings, loginError } = this.props;
    const {
      isLoginLoading,
      fbLoginErrorMessage,
      modalVisible,
      isOTPVisible,
    } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <FormFirstLogin
          title={firstLoginTitle}
          settings={settings}
          text={firstLoginText}
          skipButtonText={skipButtonText}
          colorPrimary={settings.colorPrimary}
          translations={translations}
          onSkip={this._handleSkip}
          onNavigateRegister={this._handleNavigateRegister}
          onNavigateLostPassword={this._handleNavigateLostPassword}
          isLoginLoading={isLoginLoading}
          onLogin={this._handleLoginDefault}
          loginError={loginError ? translations[loginError] : ""}
          loginFbError={fbLoginErrorMessage}
          renderBottom={this._renderBottom}
        />
        <LostPasswordModal
          visible={modalVisible}
          onRequestClose={this._handleGoBack}
          source={{ uri: settings.resetPasswordURL }}
        />
        <LoadingFull visible={this.state.isLoadingFbLogin} />
        {this._renderModalOTP()}
      </View>
    );
  }
}

const mapStateToProps = ({
  translations,
  deviceToken,
  shortProfile,
  auth,
  settings,
  notificationAdminSettings,
  loginError,
}) => ({
  translations,
  deviceToken,
  shortProfile,
  auth,
  settings,
  notificationAdminSettings,
  loginError,
});

const mapDispatchToProps = {
  login,
  loginFb,
  getAccountNav,
  getShortProfile,
  getMyProfile,
  setUserConnection,
  getMessageChatNewCount,
  setDeviceTokenToFirebase,
  getNotificationAdminSettings,
  setNotificationSettings,
  loginApple,
  getProductsCart,
  loginWithOTP,
};

export default connect(mapStateToProps, mapDispatchToProps)(FirstLoginScreen);
