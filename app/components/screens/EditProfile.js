import React, { Component } from "react";
import { View, Dimensions } from "react-native";
import { FormLv2, Layout } from "../dumbs";
import { ViewWithLoading, AlertError } from "../../wiloke-elements";
import { connect } from "react-redux";
import * as Consts from "../../constants/styleConstants";
import {
  getEditProfileForm,
  postMyProfile,
  unlockOTP,
  verifyOTP,
  resetOTP,
  disableOTP,
  getMyProfile,
} from "../../actions";
import _ from "lodash";
import he from "he";
import Constants from "expo-constants";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

class EditProfile extends Component {
  state = {
    isLoading: true,
    isLoadingSubmit: false,
    isShowQRCode: false,
  };

  async componentDidMount() {
    try {
      await this.props.getEditProfileForm();
      this.setState({ isLoading: false });
    } catch (err) {
      console.log(err);
    }
  }
  componentWillUnmount() {
    this.props.resetOTP();
  }

  _handleUnlockOTP = async (password) => {
    const {
      unlockOTP,
      myProfile,
      disableOTP,
      postMyProfile,
      getMyProfile,
      resetOTP,
    } = this.props;
    if (myProfile.oBasicInfo.toggle_two_factor_auth) {
      await disableOTP(password);
      const { myOTP } = this.props;
      if (myOTP.disableOtp.status === "success") {
        await getMyProfile();
      }
    } else {
      await unlockOTP(password);
      const { myOTP } = this.props;
      if (myOTP.unlockOtp.status === "success" && !myOTP.unlockOtp.next) {
        await getMyProfile();
      }
    }
  };

  _handleEnableOTP = async (code) => {
    const { verifyOTP, getMyProfile, resetOTP } = this.props;
    await verifyOTP(code);
    const { myOTP } = this.props;
    if (myOTP.verifyOTP.status === "success") {
      await getMyProfile();
    }
  };

  _handleReset = () => {
    const { resetOTP } = this.props;
    resetOTP();
  };

  _handleSubmitForm = async (results, isError) => {
    try {
      const { navigation } = this.props;
      if (!isError) {
        await this.setState({
          isLoadingSubmit: true,
        });
        await this.props.postMyProfile(results);
        this.setState({
          isLoadingSubmit: false,
        });
        const changePassword =
          this.props.auth.message === "passwordHasBeenUpdated";
        !this.props.myProfileError && !changePassword && navigation.goBack();
        (!!this.props.myProfileError || changePassword) &&
          setTimeout(
            () =>
              this._scrollView.scrollTo({
                x: 0,
                y: 0,
                animated: true,
              }),
            1
          );
        changePassword && navigation.navigate("AccountScreen");
      } else {
        setTimeout(
          () =>
            this._scrollView.scrollTo({
              x: 0,
              y: 0,
              animated: true,
            }),
          1
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  _getIcon = (key) => {
    switch (key) {
      case "oBasicInfo":
        return "user";
      case "oFollowAndContact":
        return "map";
      case "oPassword":
        return "activity";
      default:
        return "check";
    }
  };

  renderContent = () => {
    const {
      editProfileForm,
      settings,
      myProfile,
      translations,
      myProfileError,
      myOTP,
    } = this.props;
    const { isLoading } = this.state;
    const _editProfileForm = editProfileForm.map((formItem) => {
      return {
        ...formItem,
        icon: this._getIcon(formItem.key),
        heading: !_.isEmpty(translations[formItem.heading])
          ? he.decode(translations[formItem.heading])
          : formItem.heading,
        aFields: formItem.aFields.map((fieldItem) => {
          return {
            ...fieldItem,
            label: !_.isEmpty(translations[fieldItem.label])
              ? he.decode(translations[fieldItem.label])
              : fieldItem.label,
          };
        }),
      };
    });
    return (
      <View
        style={{
          padding: 10,
          flex: 1,
          minHeight: SCREEN_HEIGHT - 100,
          backgroundColor: Consts.colorGray2,
        }}
      >
        <ViewWithLoading
          isLoading={isLoading}
          contentLoader="contentHeader"
          avatarSquare={true}
          avatarSize={60}
          contentLoaderItemLength={3}
          gap={10}
        >
          {!!myProfileError && (
            <AlertError
              style={{ marginVertical: 8, marginHorizontal: 5 }}
              text={translations[myProfileError]}
            />
          )}
          <FormLv2
            translations={translations}
            colorPrimary={settings.colorPrimary}
            data={_editProfileForm}
            dataHeadingPropName="heading"
            dataFieldsPropName="aFields"
            defaultResults={myProfile}
            buttonSubmitEnabled={true}
            buttonSubmitProps={{
              size: "lg",
              block: true,
              backgroundColor: "primary",
              colorPrimary: settings.colorPrimary,
              isLoading: this.state.isLoadingSubmit,
              style: {
                paddingVertical: 0,
                height: 50,
                justifyContent: "center",
                marginBottom: 20,
              },
            }}
            buttonSubmitOnPress={this._handleSubmitForm}
            buttonSubmitText={translations.saveChanges}
            alertErrorText={translations.youNeedToCompleteAllRequired}
            validationData={translations.validationData}
            uploadPhotoFromLibraryText={translations.uploadPhotoFromLibrary}
            takeAPhotoText={translations.takeAPhoto}
            uploadPhotoTextLabel={translations.uploadPhoto}
            cancelText={translations.cancel}
            onUnlockOTP={this._handleUnlockOTP}
            myOTP={myOTP}
            onVerifyOTP={this._handleEnableOTP}
            onResetOTP={this._handleReset}
          />
        </ViewWithLoading>
      </View>
    );
  };
  render() {
    const { settings, navigation, translations } = this.props;
    return (
      <Layout
        navigation={navigation}
        headerType="headerHasBack"
        title={translations.editProfile}
        renderContent={this.renderContent}
        goBack={() => navigation.goBack()}
        scrollViewRef={(c) => (this._scrollView = c)}
        colorPrimary={settings.colorPrimary}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  settings: state.settings,
  auth: state.auth,
  translations: state.translations,
  editProfileForm: state.editProfileForm,
  myProfile: state.myProfile,
  myProfileError: state.myProfileError,
  myOTP: state.otpReducer,
});

const mapDispatchToProps = {
  getEditProfileForm,
  postMyProfile,
  unlockOTP,
  verifyOTP,
  resetOTP,
  disableOTP,
  getMyProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
