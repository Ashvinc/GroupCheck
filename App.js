/*
import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

*/

import React, { Component } from 'react';
import { Alert, Linking, Dimensions, LayoutAnimation, Text, View, StatusBar, StyleSheet, TouchableOpacity, Button, AppRegistry, TextInput, FlatList } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

var check = false;
//var currentUser = null;
var receiptJSON;
var currentUser = {username: "Dummy"};
var thisip = "http://192.168.137.1:4001";


class ListItem extends React.Component {
    render() {
        return (
            <Text>{this.props.element}</Text>
        );
    }
}


class HomeScreen extends React.Component {
  render() {
    if(receiptJSON){
      var temp = JSON.parse(receiptJSON);
    console.log(temp[0]);
    }
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#6ED4C8', alignItems: 'center', justifyContent: 'space-evenly' }}>

      <View style={{ height: 80, width: 0.8 * Dimensions.get('window').width , backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}} >
        <Text style={{ fontSize: 40, fontWeight: 'bold'}}>App Name</Text>
      </View>

      <View style={{ height: 80 ,width: 0.8 * Dimensions.get('window').width ,backgroundColor: 'skyblue', alignItems: 'center', justifyContent: 'center'}} >
        
       

      
        <Button
          color='blue'
          type="outline"
          title="Sign In"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'SignIn' })
              ],
            }))
          }}
        />

        </View>
      <View style={{height:80, width: 0.8 * Dimensions.get('window').width, backgroundColor: 'skyblue', alignItems: 'center', justifyContent: 'center'}} >


        <Button
          title="Sign Up"
          color='blue'
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'SignUp' })
              ],
            }))
          }}
        />
        </View>
      <View style={{ height:80 , width: 0.8 * Dimensions.get('window').width, backgroundColor: 'skyblue', alignItems: 'center', justifyContent: 'center'}} >
        

        <Button
          
          
          title="Special Attack"
          color='blue'
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Hack' })
              ],
            }))
          }}
        />
        </View>
      </View>
    );
  }  
}

class SignInScreen extends React.Component {
  constructor(){
    super();
    this.username = null;
    this.password = null;
    this.success = true;
  }
  send(J){
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function(){
      console.log(xhttp.response);
    }
    xhttp.open("GET",thisip+"/users/"+this.username,true);
    console.log(xhttp.response);
    //currentUser = JSON.parse(xhttp.response);
    //if (currentUser == null) {
      currentUser = {username: "jason", password: "Liu"};
    //}
    //;
    //xhttp.send(J);
  }
  render() {

    return (
          <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#6ED4C8', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <View style={{ height: 80, width: 0.8 * Dimensions.get('window').width , backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}} >
        <Text>Sign in Screen</Text>
        </View>

            <View style={{ height: 80, width: 0.8 * Dimensions.get('window').width , backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}} >        
          <TextInput
            style={{height: 40, width: 200}}
            placeholder="Username"
            onChangeText={(text) => {this.username = text}}
          />

          </View>


            <View style={{ height: 80, width: 0.8 * Dimensions.get('window').width , backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}} >   
          <TextInput
            style={{height: 40, width: 200}}
            placeholder="Password"
            onChangeText={(text) => {this.password = text}}
          />
          </View>

            <View style={{ height: 80, width: 0.8 * Dimensions.get('window').width , backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}} > 
          <Button
          title="Submit"
          onPress={() => {
            console.log(this.username);
            this.send(JSON.stringify({
                    username: this.username
                  }));
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'User' })
              ]
            }))
          }}
        />

        </View>

        <View style={{ height: 80, width: 0.8 * Dimensions.get('window').width , backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}} > 
          <Button
          title="Go back"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Home' })
              ],
            }))
          }}
        />
      </View>
      </View>

      
    );
  }  
}


class SignUpScreen extends React.Component {
  constructor(){
    super();
    this.password = null;
    this.username = null;
    this.name = null;
    this.phoneNumber = null;
  }
  send(J){
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function(){
      console.log(xhttp.response);
    }
    //xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.open("POST",thisip+"/users");
    //xhttp.open("GET", thisip+"/users",true);
    xhttp.send(J);
  }
  render() {
    return (
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#6ED4C8', alignItems: 'center', justifyContent: 'space-evenly' }}>
        <View style={{ height: 80, width: 0.8 * Dimensions.get('window').width , backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}} >
        <Text>Sign up Screen</Text>

        </View>

                <View style={{ height: 80, width: 0.8 * Dimensions.get('window').width , backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}} >
          <TextInput
            style={{height: 40, width: 200}}
            placeholder="Username"
            onChangeText={(text) => {this.username = text} }
          />

          </View>

                  <View style={{ height: 80, width: 0.8 * Dimensions.get('window').width , backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}} >
          <TextInput
            style={{height: 40, width: 200}}
            placeholder="Password"
            onChangeText={(text) => {this.password = text}}
          />

          </View>

                  <View style={{ height: 80, width: 0.8 * Dimensions.get('window').width , backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}} >
          <TextInput
            style={{height: 40, width: 200}}
            placeholder="Name"
            onChangeText={(text) => {this.name = text}}
          />

          </View>

                  <View style={{ height: 80, width: 0.8 * Dimensions.get('window').width , backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}} >
          <TextInput
            style={{height: 40, width: 200}}
            placeholder="Phone Number"
            onChangeText={(text) => {this.phoneNumber = text}}
          />

          </View>

                  <View style={{ height: 80, width: 0.8 * Dimensions.get('window').width , backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}} >
          <Button
          title="Submit"
          onPress={() => {
            /*fetch(thisip+ "/users", {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    username: this.username,
                    password: this.password,
                    name: this.name,
                    phoneNumber: this.phoneNumber
                  }),
                });*/
            console.log(this.username);
            this.send(JSON.stringify({
                    username: this.username,
                    password: this.password,
                    name: this.name,
                    phoneNumber: this.phoneNumber
                  }));
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Home' })
              ],
            }))
          }}
        />

        </View>

                <View style={{ height: 80, width: 0.8 * Dimensions.get('window').width , backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}} >

          <Button
          title="Go back"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Home' })
              ],
            }))
          }}
        />
</View>
      </View>
      
    );
  }  
}

class UserScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#6ED4C8', alignItems: 'center', justifyContent: 'space-evenly' }}>

      <View style={{ height: 80, width: 0.8 * Dimensions.get('window').width , backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}} >
        <Text>Hello, {currentUser.username}</Text>
        </View>

        <View style={{ height: 80, width: 0.8 * Dimensions.get('window').width , backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}} >
        <Button
          title="Create group"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'createGroup' })
              ],
            }))
          }}
        />
        </View>

        <View style={{ height: 80, width: 0.8 * Dimensions.get('window').width , backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}} >
        <Button
          title="Join group"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'joinGroup' })
              ],
            }))
          }}
        />

        </View>




        <View style={{ height: 80, width: 0.8 * Dimensions.get('window').width , backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}} >
        <Button
          title="Log out"
          onPress={() => {
            currentUser = {username: "Dummy"};
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Home' })
              ],
            }))
          }}
        />

        </View>
      </View>
    );
  }  
}

class joinGroupScreen extends React.Component {
  constructor(){
    super();
  }
  send(J){
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function(){
      console.log(xhttp.response);
    }
    xhttp.open("PATCH",thisip+"/groups",true);
    //xhttp.open("GET", thisip+"/users",true);
    xhttp.send(J);
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#6ED4C8', alignItems: 'center', justifyContent: 'space-evenly' }}>

      <View style={{ height: 80, width: 0.8 * Dimensions.get('window').width , backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}} >
        <Text style={{ fontSize: 40, fontWeight: 'bold'}}>Join a Team</Text>
        </View>

       <View style={{ height: 80, width: 0.8 * Dimensions.get('window').width , backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}} >       
         <TextInput
            style={{height: 40, width: 60}}
            placeholder="Team ID"
            onChangeText={(text) => {currentUser.groupID = text} }
        />
        </View>

      <View style={{ height: 80, width: 0.8 * Dimensions.get('window').width , backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}} >
        <Button
          title="Submit"
          onPress={() => {
            console.log("joining group"+currentUser.groupID);
            this.send(JSON.stringify({
                    username: this.username,
                    groupID: currentUser.groupID
                  }));
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Group' })
              ],
            }))
          }}
        />

        </View>

              <View style={{ height: 80, width: 0.8 * Dimensions.get('window').width , backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}} >
        <Button
          title="Cancel"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'User' })
              ],
            }))
          }}
        />

        </View>
      </View>
    );
  }  
}

class createGroupScreen extends React.Component {
  constructor(){
    super();
  }
  send(J){
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function(){
      console.log(xhttp.response);
    }
    xhttp.open("POST",thisip+"/groups",true);
    //xhttp.open("GET", thisip+"/users",true);
    xhttp.send(J);
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#6ED4C8', alignItems: 'center', justifyContent: 'space-evenly' }}>

      <View style={{ height: 80, width: 0.8 * Dimensions.get('window').width , backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}} >
         <Text style={{ fontSize: 40, fontWeight: 'bold'}}>Create a Team</Text>

        </View>

          <View style={{ height: 80, width: 0.8 * Dimensions.get('window').width , backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}} >    
         <TextInput
            style={{height: 40, width: 60}}
            placeholder="Team ID"
            onChangeText={(text) => {currentUser.groupID = text} }
        />

        </View>

              <View style={{ height: 80, width: 0.8 * Dimensions.get('window').width , backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}} >
        <Button
          title="Submit"
          onPress={() => {
            console.log("creating group "+currentUser.groupID);
            this.send(JSON.stringify({
                    username: this.username,
                    groupID: currentUser.groupID
                  }));
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Group' })
              ],
            }))
          }}
        />

        </View>

              <View style={{ height: 80, width: 0.8 * Dimensions.get('window').width , backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}} >
        <Button
          title="Cancel"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'User' })
              ],
            }))
          }}
        />

        </View>
      </View>
    );
  }  
}

class groupScreen extends React.Component {
  constructor(){
    super();
    this.send(currentUser.groupID);
  }
  send(id){
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function(){
      console.log(xhttp.response);
    }
    xhttp.open("GET",thisip+"/groups",true);
    //xhttp.open("GET", thisip+"/users",true);
    xhttp.send(JSON.stringify({
      groupID: id
    }));
    console.log("XHTTP: "+xhttp.response);
    if (xhttp.response == ""){
        console.log("retrieving group members failed; using default");
        currentUser.groupMember=["Jason","Ashvin","Kevin","Danny","Alex"];
    }
    else 
      currentUser.groupMember = (JSON.parse(xhttp.response)).members;
  }
  render() {
    return (

      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#6ED4C8', alignItems: 'center', justifyContent: 'space-evenly' }}>

      <View style={{ height: 80, width: 0.8 * Dimensions.get('window').width , backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}} >

        <Text>your group {currentUser.groupID}</Text>

        </View>

       <View style={{ height: 80, width: 0.8 * Dimensions.get('window').width , backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}} >       
        <FlatList
          data= {currentUser.groupMember}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        />

        </View>

              <View style={{ height: 80, width: 0.8 * Dimensions.get('window').width , backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}} >
        <Button
          title="Camera"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Camera' })
              ],
            }))
          }}
        />  

        </View>

              <View style={{ height: 80, width: 0.8 * Dimensions.get('window').width , backgroundColor: 'powderblue', alignItems: 'center', justifyContent: 'center'}} >
        <Button
          title="Go back"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'User' })
              ],
            }))
          }}
        />

        </View>
      </View>
    );
  }  
}



class MyScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>hack</Text>
        <Button
          title="Go back"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Home' })
              ],
            }))
          }}
        />
      </View>
    );
  }  

}

class orderScreen extends React.Component {
  render() {


    return (
      <FlatList data={receiptJSON} renderItem={
            ({item}) => <ListItem element={item}/>
          }
        />
      /*
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>your orders</Text>
        <View style={styles.container}>



      </View>
        <Button
          title="Go back"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'User' })
              ],
            }))
          }}
        />
      </View>
      */
    );
  }  

}

class CameraApp extends React.Component {
  state = {
    hasCameraPermission: null,
    lastScannedUrl: null,
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = result => {
    if (result.data !== this.state.lastScannedUrl) {
      LayoutAnimation.spring();
      this.setState({ lastScannedUrl: result.data });
      check = true;
    }//
  };
  send(J){
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function(){
      console.log(xhttp.response);
    }
    xhttp.open("POST",thisip+"/groups",true);
    //xhttp.open("GET", thisip+"/users",true);
    xhttp.send(J);
  }
  render() {


    receiptJSON = this.state.lastScannedUrl;
    return (
      <View style={styles.container}>
        <Button
          icon={{
    name: "arrow-right",
    size: 80,
    color: "white"
        }}
          title="Camera"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Camera' })
              ],
            }))
          }}
        /> 
        {this.state.hasCameraPermission === null
          ? <Text>Requesting for camera permission</Text>
          : this.state.hasCameraPermission === false
              ? <Text style={{ color: '#fff' }}>
                  Camera permission is not granted
                </Text>
              : <BarCodeScanner
                  onBarCodeRead={this._handleBarCodeRead}
                  style={{
                    height: Dimensions.get('window').height,
                    width: Dimensions.get('window').width,
                  }}
                />}

        {this._maybeRenderUrl()}
        

        <StatusBar hidden />
      </View>
    );
  }

  _handlePressUrl = () => {
    Alert.alert(
      'Open this URL?',
      this.state.lastScannedUrl,
      [
        {
          text: 'Yes',
          onPress: () => {
            currentUser.order = this.state.lastScannedUrl;
            this.send(currentUser.order);
            currentUser.order = JSON.parse(currentUser.order);
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Order' })
              ],
            }))
          }
        },
        { text: 'No', onPress: () => {} },
      ],
      { cancellable: false }
    );
  };

  _handlePressCancel = () => {
    this.setState({ lastScannedUrl: null });
  };

  _maybeRenderUrl = () => {
    if (!this.state.lastScannedUrl) {
      return;
    }

    return (
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.url} onPress={this._handlePressUrl}>
          <Text numberOfLines={1} style={styles.urlText}>
            {this.state.lastScannedUrl}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={this._handlePressCancel}>
          <Text style={styles.cancelButtonText}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 15,
    flexDirection: 'row',
  },
  url: {
    flex: 1,
  },
  urlText: {
    color: '#fff',
    fontSize: 20,
  },
  cancelButton: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 18,
  },
});
const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  SignIn: {
    screen: SignInScreen,
  },
  SignUp: {
    screen: SignUpScreen,
  },
  Hack: {
    screen: MyScreen,
  },
  User: {
    screen: UserScreen,
  },
  createGroup: {
    screen: createGroupScreen,
  },
  joinGroup: {
    screen: joinGroupScreen,
  },

  Group: {
    screen: groupScreen,
  },
  Order: {
    screen: orderScreen,
  },
  Camera: {
    screen: CameraApp,
  }
}, {
    initialRouteName: 'Home',
});


export default createAppContainer(AppNavigator);


