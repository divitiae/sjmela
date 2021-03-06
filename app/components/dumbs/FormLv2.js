import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";
import {
  InputMaterial,
  Button,
  CheckBox,
  ContentBox,
  P,
  ImageUpload,
  Switch,
  SocialField,
  validEmail,
  validPhone,
  validUrl,
  AlertError,
  KeyboardAnimationRP,
  Image2,
  wait,
} from "../../wiloke-elements";
import _ from "lodash";
import * as Consts from "../../constants/styleConstants";
import ModalQRCode from "../dumbs/ModalQRCode/ModalQRCode";

const mapResultToResultError = (arr, fields) => {
  return (
    !_.isEmpty(arr) &&
    arr.map((item) => ({
      ...item,
      [fields]: item[fields].map((itemChild) => ({
        ...itemChild,
        presence: false,
        special: false,
        length: false,
      })),
    }))
  );
};

const shortenResults = (results) => {
  return Object.keys(results).reduce((obj, box) => {
    return {
      ...obj,
      ...results[box],
    };
  }, {});
};

const handlingResults = (results, boxKey, itemKey, text) => {
  return {
    ...results,
    [boxKey]: {
      ...results[boxKey],
      [itemKey]: text,
    },
  };
};

const mapKeyRequired = (array, fields) => {
  return array
    .reduce((newArr, box) => {
      return [...newArr, ...box[fields]];
    }, [])
    .filter((item) => item.required)
    .map((item) => item.key);
};

export default class Form extends Component {
  static propTypes = {
    ...InputMaterial.propTypes,
    ...Button.propTypes,
    ...ContentBox.propTypes,
    ...CheckBox.propTypes,
    ...ImageUpload.propTypes,
    ...Switch.propTypes,
    ...SocialField.propTypes,
    colorPrimary: PropTypes.string,
    text: PropTypes.string,
    renderTopComponent: PropTypes.func,
    renderBottomComponent: PropTypes.func,
    onSubmitResults: PropTypes.func,
    onResult: PropTypes.func,
    defaultResults: PropTypes.object,
    buttonSubmitProps: PropTypes.object,
    buttonSubmitText: PropTypes.string,
    buttonSubmitEnabled: PropTypes.bool,
    buttonSubmitOnPress: PropTypes.func,
    alertErrorText: PropTypes.string,
    uploadPhotoFromLibraryText: PropTypes.string,
    takeAPhotoText: PropTypes.string,
    uploadPhotoTextLabel: PropTypes.string,
  };

  static defaultProps = {
    renderTopComponent: (_) => {},
    renderBottomComponent: (_) => {},
    onSubmitResults: (_) => {},
    onResult: (_) => {},
    buttonSubmitOnPress: (_) => {},
    defaultResults: {},
    buttonSubmitProps: {
      size: "lg",
      block: true,
      backgroundColor: "primary",
    },
    buttonSubmitText: "Submit",
    buttonSubmitEnabled: true,
    alertErrorText: "Error",
  };

  constructor(props) {
    super(props);
    const { defaultResults, data, dataFieldsPropName } = this.props;
    this.state = {
      results: defaultResults,
      validations: mapResultToResultError(data, dataFieldsPropName),
      isError: false,
      isVisible: false,
      myPassword: "",
      otpText: "",
      loadingButton: false,
    };
  }

  async componentDidMount() {
    const { defaultResults, data, dataFieldsPropName } = this.props;
    await this.setState({
      results: defaultResults,
      validations: mapResultToResultError(data, dataFieldsPropName),
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!_.isEqual(nextState.results, this.state.results)) {
      return true;
    }
    if (!_.isEqual(nextState.validations, this.state.validations)) {
      return true;
    }
    if (!_.isEqual(nextState.isVisible, this.state.isVisible)) {
      return true;
    }
    if (!_.isEqual(nextState.loadingButton, this.state.loadingButton)) {
      return true;
    }
    if (!_.isEqual(nextState.isConfirmPassword, this.state.isConfirmPassword)) {
      return true;
    }
    if (
      !_.isEqual(nextState.myPassword, this.state.myPassword) ||
      !_.isEqual(nextState.otpText, this.state.otpText)
    ) {
      return true;
    }
    if (!_.isEqual(nextState.inputFocusType, this.state.inputFocusType)) {
      return true;
    }
    if (nextState.isError !== this.state.isError) {
      return true;
    }
    if (!_.isEqual(nextProps.buttonSubmitProps, this.props.buttonSubmitProps)) {
      return true;
    }
    if (!_.isEqual(nextProps.myOTP, this.props.myOTP)) {
      return true;
    }

    return false;
  }

  renderMessageError = (validationType, typeErr) => {
    const { validationData } = this.props;
    const message =
      !_.isEmpty(validationData[validationType]) &&
      !_.isEmpty(validationData[validationType][typeErr]) &&
      validationData[validationType][typeErr].message;
    return (
      <View style={{ marginTop: -8 }}>
        <P style={{ color: Consts.colorQuaternary, fontSize: 12 }}>{message}</P>
      </View>
    );
  };

  _renderInputText = (item, boxKey, type) => {
    const { colorPrimary, validationData, dataFieldsPropName } = this.props;
    const { validations, results } = this.state;
    const isConfirmPassword =
      type === "password" &&
      !_.isEmpty(results[boxKey]) &&
      !_.isEmpty(results[boxKey].new_password) &&
      !_.isEmpty(results[boxKey].confirm_new_password) &&
      results[boxKey].new_password === results[boxKey].confirm_new_password;
    return (
      <View>
        <InputMaterial
          {...item}
          placeholder={item.placeholder || item.label}
          colorPrimary={colorPrimary}
          secureTextEntry={type === "password" && true}
          multiline={type === "textarea" && true}
          value={shortenResults(results)[item.key]}
          clearTextEnabled={false}
          onFocus={() => {
            const eventCount = !_.isEmpty(shortenResults(results)[item.key])
              ? shortenResults(results)[item.key].length
              : 0;
            this.setState({
              inputFocusType: item.type,
              validations: validations.map((validItem) => {
                return {
                  ...validItem,
                  [dataFieldsPropName]: validItem[dataFieldsPropName].map(
                    (fieldItem) => {
                      return {
                        ...fieldItem,
                        presence:
                          item.required && item.key === fieldItem.key
                            ? eventCount === 0
                              ? true
                              : false
                            : fieldItem.presence,
                      };
                    }
                  ),
                };
              }),
            });
          }}
          onChangeText={(text) => {
            const eventCount = text.length;
            this.setState({
              results: handlingResults(results, boxKey, item.key, text),
              validations: validations.map((validItem) => {
                return {
                  ...validItem,
                  [dataFieldsPropName]: validItem[dataFieldsPropName].map(
                    (fieldItem) => {
                      return {
                        ...fieldItem,
                        presence:
                          item.required && item.key === fieldItem.key
                            ? eventCount === 0
                              ? true
                              : false
                            : fieldItem.presence,
                        length:
                          item.required && item.key === fieldItem.key
                            ? eventCount > 1 &&
                              !_.isEmpty(
                                validationData[fieldItem.validationType].length
                              ) &&
                              eventCount <
                                validationData[fieldItem.validationType].length
                                  .minimum &&
                              !fieldItem.special
                              ? true
                              : false
                            : fieldItem.length,
                        special:
                          item.required && item.key === fieldItem.key
                            ? eventCount > 0 &&
                              ((!validEmail(text) &&
                                fieldItem.validationType === "email") ||
                                (!validPhone(text) &&
                                  fieldItem.validationType === "phone") ||
                                (!validUrl(text) &&
                                  fieldItem.validationType === "url"))
                              ? true
                              : false
                            : fieldItem.special,
                      };
                    }
                  ),
                };
              }),
            });
          }}
        />
        {item.presence &&
          this.renderMessageError(item.validationType, "presence")}
        {item.length && this.renderMessageError(item.validationType, "length")}
        {item.special &&
          this.renderMessageError(item.validationType, "special")}
      </View>
    );
  };

  _renderLink = (item) => {
    return (
      <View>
        <View style={{ height: 20 }} />
        <TouchableOpacity activeOpacity={0.6} {...item}>
          <P>{item.text}</P>
        </TouchableOpacity>
      </View>
    );
  };

  // _renderButton = item => {
  //   const { colorPrimary, onSubmitResults } = this.props;
  //   const { results, validations } = this.state;
  //   this.props.renderButtonSubmit(results, getStatus(validations));
  //   // return (
  //   //   <Button
  //   //     colorPrimary={colorPrimary}
  //   //     {...item}
  //   //     onPress={() => {
  //   //       onSubmitResults(results);
  //   //     }}
  //   //   >
  //   //     {item.buttonText}
  //   //   </Button>
  //   // );
  // };

  _renderCheckbox = (item, boxKey) => {
    const { colorPrimary } = this.props;
    return (
      <View>
        <CheckBox
          circleAnimatedColor={[Consts.colorDark4, colorPrimary]}
          iconBackgroundColor={colorPrimary}
          {...item}
          onPress={async (name, isChecked) => {
            await this.setState({
              results: handlingResults(
                this.state.results,
                boxKey,
                item.key,
                isChecked
              ),
            });
          }}
        />
        <View style={{ height: 10 }} />
      </View>
    );
  };

  _renderImageUpload = (item, boxKey) => {
    const {
      uploadPhotoFromLibraryText,
      takeAPhotoText,
      uploadPhotoTextLabel,
      cancelText,
    } = this.props;
    const { results } = this.state;
    return (
      <View>
        <ImageUpload
          {...item}
          defaultUri={
            !_.isEmpty(shortenResults(results))
              ? shortenResults(results)[item.key]
              : ""
          }
          text={uploadPhotoTextLabel}
          uploadPhotoText={uploadPhotoFromLibraryText}
          takeAPhotoText={takeAPhotoText}
          cancelText={cancelText}
          aspect={item.key === "avatar" ? [1, 1] : [16, 9]}
          onChange={async (result) => {
            const { base64, uri } = result;
            const name = uri.split("/").pop();
            const match = /\.(\w+)$/.exec(name);
            const type = match ? `image/${match[1]}` : `image`;
            const imageObj = {
              uri,
              name,
              base64,
              type,
            };
            await this.setState({
              results: handlingResults(
                this.state.results,
                boxKey,
                item.key,
                imageObj
              ),
            });
          }}
        />
        <View style={{ height: 10 }} />
      </View>
    );
  };

  _handleSwitchValue = (item, boxKey) => async (name, isChecked) => {
    if (item.key !== "toggle_two_factor_auth") {
      await this.setState({
        results: handlingResults(
          this.state.results,
          boxKey,
          item.key,
          isChecked
        ),
      });
    } else {
      this.setState({
        isVisible: true,
        results: handlingResults(
          this.state.results,
          boxKey,
          item.key,
          isChecked
        ),
      });
    }
  };

  _handleCancelAuthen = async () => {
    const { defaultResults } = this.props;
    await this.setState((prevState) => ({
      results: {
        ...prevState.results,
        oBasicInfo: {
          ...prevState.results.oBasicInfo,
          toggle_two_factor_auth:
            defaultResults.oBasicInfo.toggle_two_factor_auth,
        },
      },
      isVisible: false,
    }));
  };

  _renderSwitch = (item, boxKey) => {
    const { colorPrimary } = this.props;
    const { results } = this.state;
    return (
      <View>
        <Switch
          {...item}
          checked={shortenResults(results)[item.key]}
          colorActive={colorPrimary}
          swipeActiveColor={colorPrimary}
          circleAnimatedColor={[Consts.colorDark4, colorPrimary]}
          style={{
            borderBottomWidth: 2,
            borderBottomColor: Consts.colorGray1,
            paddingBottom: 8,
          }}
          onPress={this._handleSwitchValue(item, boxKey)}
        />
        <View style={{ height: 10 }} />
      </View>
    );
  };

  _renderSocial = (item, boxKey) => {
    const { colorPrimary, translations } = this.props;
    const { results } = this.state;
    const defaultResults =
      !_.isEmpty(shortenResults(results)) &&
      shortenResults(results)[item.key].length > 0
        ? shortenResults(results)[item.key]
        : [{ id: "", url: "" }];
    return (
      <View>
        <SocialField
          {...item}
          socials={item.options}
          colorPrimary={colorPrimary}
          defaultResults={defaultResults}
          onChangeResults={async (_results) => {
            await this.setState({
              results: handlingResults(results, boxKey, item.key, _results),
            });
          }}
          buttonAddText={translations.addSocial}
          modalPickerLabel={translations.socialNetworks.split(" ")[0]}
        />
      </View>
    );
  };

  _checkRender = (item, boxKey) => {
    switch (item.type) {
      case "inputText":
      case "text":
        return this._renderInputText(item, boxKey);
      case "textarea":
        return this._renderInputText(item, boxKey, "textarea");
      case "password":
        return this._renderInputText(item, boxKey, "password");
      case "link":
        return this._renderLink(item);
      // // case "submit":
      // //   return this._renderButton(item);
      case "checkbox":
        return this._renderCheckbox(item, boxKey);
      case "file":
        return this._renderImageUpload(item, boxKey);
      case "switch":
        return this._renderSwitch(item, boxKey);
      case "social_networks":
        return this._renderSocial(item, boxKey);
      default:
        return false;
    }
  };

  _handleSubmitForm = () => {
    const { results, validations } = this.state;
    const { dataFieldsPropName } = this.props;
    const fieldsErrors = mapKeyRequired(validations, dataFieldsPropName).filter(
      (item) => shortenResults(results)[item] === ""
    );
    const isError = fieldsErrors.length > 0;
    this.props.buttonSubmitOnPress(results, isError);
    this.setState({
      validations: validations.map((validItem) => {
        return {
          ...validItem,
          [dataFieldsPropName]: validItem[dataFieldsPropName].map(
            (fieldItem) => {
              return {
                ...fieldItem,
                presence: fieldsErrors.includes(fieldItem.key)
                  ? true
                  : fieldItem.presence,
              };
            }
          ),
        };
      }),
      isError,
    });
  };

  _renderButtonSubmit = () => {
    const { buttonSubmitProps, buttonSubmitText } = this.props;
    return (
      <Button {...buttonSubmitProps} onPress={this._handleSubmitForm}>
        {buttonSubmitText}
      </Button>
    );
  };

  _renderContentBox = (box) => {
    const {
      dataFieldsPropName,
      colorPrimary,
      renderTopComponent,
      renderBottomComponent,
    } = this.props;
    const fields = box[dataFieldsPropName];
    return (
      <ContentBox
        key={box.key}
        headerTitle={box.heading}
        headerIcon={box.icon}
        colorPrimary={colorPrimary}
        style={{
          marginBottom: 10,
        }}
      >
        <View>
          {renderTopComponent()}
          {!_.isEmpty(fields) &&
            fields.map((item, index) => (
              <View key={index.toString()}>
                {this._checkRender(item, box.key)}
              </View>
            ))}
          {renderBottomComponent()}
        </View>
      </ContentBox>
    );
  };

  renderQRCode = () => {
    const { translations, myOTP, colorPrimary } = this.props;
    return (
      <View>
        <Text>{translations.scanQrCodeGuide}</Text>
        <View style={{ paddingVertical: 10 }}>
          {typeof myOTP.unlockOtp.qrCodeUrl === "string" ? (
            <Image2
              width={150}
              height={150}
              // percentRatio="75%"
              uri={myOTP.unlockOtp.qrCodeUrl}
            />
          ) : null}
        </View>
        <InputMaterial
          clearTextEnabled={false}
          placeholder={translations.enterCode}
          colorPrimary={colorPrimary}
          value={this.state.otpText}
          onChangeText={(text) => this.setState({ otpText: text })}
        />
        {!!myOTP.verifyOTP.status && (
          <View style={{ marginTop: -8 }}>
            <P style={{ color: Consts.colorQuaternary, fontSize: 12 }}>
              {translations[myOTP.verifyOTP.msg]}
            </P>
          </View>
        )}
      </View>
    );
  };

  _submitOTP = async () => {
    const {
      onUnlockOTP,
      myOTP,
      onVerifyOTP,
      defaultResults,
      onResetOTP,
    } = this.props;
    await this.setState({
      loadingButton: true,
    });
    if (
      !!myOTP.unlockOtp.qrCodeUrl &&
      typeof myOTP.unlockOtp.qrCodeUrl === "string"
    ) {
      onVerifyOTP && (await onVerifyOTP(this.state.otpText));
      const { myOTP: newMyOTP } = this.props;
      if (newMyOTP.verifyOTP.status === "success") {
        await wait(1500);
        this.setState({
          isVisible: false,
          myPassword: "",
          otpText: "",
        });
        onResetOTP();
      }
      // this.setState({
      //   loadingButton: false,
      // });
    } else {
      await onUnlockOTP(this.state.myPassword);
      const { myOTP: newMyOTP } = this.props;
      if (
        (newMyOTP.unlockOtp.status === "success" && !newMyOTP.unlockOtp.next) ||
        newMyOTP.disableOtp.status === "success"
      ) {
        await this.setState({
          isVisible: false,
          myPassword: "",
          otpText: "",
        });
        onResetOTP();
      }
    }
    await this.setState({
      loadingButton: false,
    });
  };

  renderModalAuthenticator = () => {
    const { isVisible, results, loadingButton } = this.state;
    const { translations, colorPrimary, myOTP } = this.props;
    return (
      <ModalQRCode
        isVisible={isVisible}
        headerIcon="edit"
        headerTitle={translations["twofactorauth"]}
        colorPrimary={colorPrimary}
        cancelText={translations.cancel}
        submitText={
          results.oBasicInfo.toggle_two_factor_auth
            ? translations.turnOn
            : translations.turnOff
        }
        onBackdropPress={this._handleCancelAuthen}
        onSubmitAsync={this._submitOTP}
        loadingButton={loadingButton}
      >
        {myOTP.unlockOtp.status === "success" && !!myOTP.unlockOtp.qrCodeUrl ? (
          this.renderQRCode()
        ) : (
          <View>
            <InputMaterial
              autoFocus
              secureTextEntry={true}
              clearTextEnabled={false}
              placeholder={translations.password}
              colorPrimary={colorPrimary}
              value={this.state.myPassword}
              onChangeText={(text) => this.setState({ myPassword: text })}
            />
            {!!myOTP.unlockOtp.status && (
              <View style={{ marginTop: -8 }}>
                <P style={{ color: Consts.colorQuaternary, fontSize: 12 }}>
                  {!!translations[myOTP.unlockOtp.msg]
                    ? translations[myOTP.unlockOtp.msg]
                    : ""}
                </P>
              </View>
            )}
          </View>
        )}
      </ModalQRCode>
    );
  };

  render() {
    const { buttonSubmitEnabled, alertErrorText } = this.props;
    const { validations, isError, inputFocusType } = this.state;
    return (
      <View style={{ position: "relative" }}>
        <KeyboardAnimationRP>
          {(keyboardHeight) => (
            <View
              style={{
                position: "relative",
                bottom: inputFocusType === "password" ? keyboardHeight : 0,
              }}
            >
              {isError && (
                <AlertError
                  style={{ marginVertical: 8, marginHorizontal: 5 }}
                  text={alertErrorText}
                />
              )}
              {!_.isEmpty(validations) &&
                validations.map(this._renderContentBox)}
              {buttonSubmitEnabled && this._renderButtonSubmit()}
            </View>
          )}
        </KeyboardAnimationRP>
        {this.renderModalAuthenticator()}
      </View>
    );
  }
}
