import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {PdfCode} from '../features/PDF';
// import * as Print from 'expo-print';
// import {shareAsync} from 'expo-sharing';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import {useSelector} from 'react-redux';
import dateFormat from 'dateformat';
import {selectcartTotal} from '../features/cartSlice';
import Share from 'react-native-share';

const CustomerDetail = () => {
  const [customerData, setCustomerData] = useState({
    customerName: '',
    customerEmail: '',
    customerNumber: '',
    customerAddress: '',
    customerCity: '',
    customerState: '',
    customerZip: '',
  });
  const handleChange = (name, e) => {
    setCustomerData(prev => {
      return {
        ...prev,
        [name]: e,
      };
    });
  };
  const share = async (customOptions = options) => {
    try {
      await Share.open(customOptions);
    } catch (err) {
      console.log(err);
    }
  };
  const validate = (name, text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      console.log('Email is Not Correct');
      setCustomerData(prev => {
        return {
          ...prev,
          [name]: text,
        };
      });
      return false;
    } else {
      setCustomerData(prev => {
        return {
          ...prev,
          [name]: text,
        };
      });
      const file =
        '/storage/emulated/0/Android/data/com.xhack/files/Documents/150922115443.pdf';
      const newf = 'file://' + file;
      console.log(newf);
      console.log('Email is Correct');
    }
  };

  const items = useSelector(state => state.cart.items);
  const PaymentType = 'Cash On Delivery';
  const RemaningBalance = 0;
  const total = useSelector(selectcartTotal);
  const invoice = dateFormat(Date.now(), 'ddmmyyhhMss');
  const generateBill = async () => {
    let html = PdfCode(
      customerData.customerName,
      customerData.customerAddress,
      customerData.customerNumber,
      items,
      total,
      total,
      PaymentType,
      RemaningBalance,
      invoice,
    );
    let options = {
      html: html,
      fileName: invoice,
      directory: 'Documents',
    };
    let file = await RNHTMLtoPDF.convert(options);
    console.log(file);
    alert(file.filePath);
    // console.log(file.filePath);
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    // try {
    //   const {uri} = await Print.printToFileAsync({
    //     html,
    //   });
    //   console.log('File has been saved to:', uri);
    //   await shareAsync(uri, {UTI: '.pdf', mimeType: 'application/pdf'});

    //   // set_Name('');
    //   // setInvoice(dateFormat(now, 'ddmmyyhhMss'));
    //   // setTotal('');
    //   // setQuantity('');
    //   // SetReceivedBalance('');
    //   // Set_Address('');
    //   // Set_Mobile_No('');
    // } catch (err) {
    //   Alert.alert(
    //     'Make shure You have Internet Connection or contact @+91 8530730017',
    //   );
    // }
  };

  // console.log(customerData);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.Container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View style={styles.inputContainer}>
            <Text style={styles.labels}>Customer Name</Text>
            <TouchableOpacity>
              <TextInput
                style={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="abc@mail.com"
                placeholderTextColor="#C5C5C5"
                onChangeText={value => handleChange('customerName', value)}
                value={customerData.customerName}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.labels}>Customer Email</Text>
            <TouchableOpacity>
              <TextInput
                style={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={value => validate('customerEmail', value)}
                value={customerData.customerEmail}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.labels}>Customer Phone Number</Text>
            <TouchableOpacity>
              <TextInput
                style={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="numeric"
                onChangeText={value => handleChange('customerNumber', value)}
                value={customerData.customerNumber}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.labels}>Customer Address</Text>
            <TouchableOpacity>
              <TextInput
                style={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={value => handleChange('customerAddress', value)}
                value={customerData.customerAddress}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.labels}>State</Text>
            <TouchableOpacity>
              <TextInput
                style={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={value => handleChange('customerState', value)}
                value={customerData.customerState}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.labels}>City</Text>
            <TouchableOpacity>
              <TextInput
                style={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={value => handleChange('customerCity', value)}
                value={customerData.customerCity}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.labels}>PIN Code</Text>
            <TouchableOpacity>
              <TextInput
                style={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="numeric"
                onChangeText={value => handleChange('customerZip', value)}
                value={customerData.customerZip}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <TouchableOpacity
              style={{
                backgroundColor: 'black',
                paddingVertical: 16,
                borderRadius: 10,
                alignItems: 'center',
                marginTop: 25,
              }}
              // onPress={() => generateBill()}
              onPress={async () => {
                await share({
                  title: 'Sharing image file from awesome share app',
                  message: 'Please take a look at this image',
                  url: newf,
                });
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  fontWeight: '700',
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heroText: {
    color: '#000',
    fontSize: 34,
    fontWeight: 'semi-bold',
  },
  inputContainer: {
    marginTop: 5,
  },
  stateContainer: {
    marginTop: 10,
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'stretch',
  },
  labels: {
    fontSize: 18,
    marginTop: 10,
    color: '#7d7d7d',
    lineHeight: 25,
    marginBottom: 5,
    fontFamily: 'regular',
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    fontFamily: 'regular',
    fontSize: 18,
    color: '#7d7d7d',
  },
});
export default CustomerDetail;
