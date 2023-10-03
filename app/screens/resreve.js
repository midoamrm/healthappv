import React, { useState } from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
const Resreve2 = ({ navigation, route }) => {
  var data = route.params.datae;
  const [date, setdate] = useState('');
  const [description, setdescription] = useState('');
  const [text, settext] = useState('');
  const [field1, setfield1] = useState('');
  const [field2, setfield2] = useState('');
  const [filesToUpload, setFilesToUpload] = useState([]);
  const [filesToUpload2, setFilesToUpload2] = useState([]);
  console.log('hallo', data);

  var dateen = data[0].toLocaleDateString('en-EG-u-nu-latn', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  console.log(dateen);
  var datear = data[0].toLocaleDateString('ar-EG-u-nu-latn', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  console.log(datear);
  const Date = (text) => {
    setdate(text);
  };
  const Description = (text) => {
    setdescription(text);
  };
  function readFiles() {
    console.log('Reading file');
    DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
      allowMultiSelection: true,
    }).then((res) => {
      // log file content
      console.log(res);
      // add file to filesToUpload
      setFilesToUpload([...filesToUpload, ...res]);
    });
  }
  function readFiles2() {
    console.log('Reading file');
    DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
      allowMultiSelection: true,
    }).then((res) => {
      // log file content
      console.log(res);
      // add file to filesToUpload
      setFilesToUpload2([...filesToUpload2, ...res]);
    });
  }
  console.log('f', filesToUpload);
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: 'white',
          marginTop: 20,
          marginLeft: 40,
          marginRight: 40,
          padding: 10,
        }}>
        <Text style={{ fontSize: 30, fontStyle: 'italic', fontWeight: 600 }}>
          معلومات عامه
        </Text>
        <Text style={{ fontSize: 20, paddingTop: 10, padding: 7 }}>
          {data[3][0].key}
        </Text>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <Text style={{ fontSize: 20, textAlign: 'left', padding: 7 }}>
          {datear}
        </Text>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: 280 }}>
            <Text style={{ fontSize: 20, textAlign: 'left' }}>{data[1]}</Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Resreve');
            }}>
            <Image
              width={30}
              height={40}
              source={require('../assets/images/tk.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: 280 }}>
            <Text style={{ fontSize: 20, textAlign: 'left' }}>{data[2]}</Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Resreve');
            }}>
            <Image
              width={30}
              height={40}
              source={require('../assets/images/tk.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          marginTop: 5,
          marginLeft: 40,
          marginRight: 40,
          padding: 20,
        }}>
        <Text style={{ fontSize: 30, fontStyle: 'italic', fontWeight: 600 }}>
          المرفقات
        </Text>

        <View
          style={{
            borderColor: 'black',
            borderWidth: StyleSheet.hairlineWidth,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 20,
              paddingTop: 10,
              paddingLeft: 165,
              paddingRight: 10,
            }}>
            البطاقه
          </Text>
          <TouchableOpacity onPress={() => readFiles()}>
            <Image
              width={30}
              height={40}
              source={require('../assets/images/ukk.png')}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderColor: 'black',
            borderWidth: StyleSheet.hairlineWidth,
          }}>
          <FlatList
            data={filesToUpload}
            numColumns={1}
            scrollEnabled={true}
            renderItem={({ item, index }) => (
              <View>
                <Text>{item.name}</Text>
              </View>
            )}
          />
        </View>
        <View
          style={{
            borderColor: 'black',
            borderWidth: StyleSheet.hairlineWidth,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 20,
              paddingTop: 10,
              paddingLeft: 110,
              paddingRight: 10,
            }}>
            مرفقات اضافيه
          </Text>
          <TouchableOpacity onPress={() => readFiles2()}>
            <Image
              width={30}
              height={40}
              source={require('../assets/images/ukk.png')}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderColor: 'black',
            borderWidth: StyleSheet.hairlineWidth,
          }}>
          <FlatList
            data={filesToUpload2}
            numColumns={1}
            scrollEnabled={true}
            renderItem={({ item, index }) => (
              <View>
                <Text>{item.name}</Text>
              </View>
            )}
          />
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          marginLeft: 140,
          marginRight: 40,
        }}>
        <View
          style={{
            borderRadius: 100,
            backgroundColor: '#1D5B8C',
            width: 100,
          }}>
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate('Resreve2', { datae });
            }}>
            <Text
              style={{
                color: 'white',
                paddingRight: 27,
                paddingTop: 5,
                paddingBottom: 5,
                fontSize: 20,
              }}>
              مراجعه
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Resreve2;
