import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    TextInput,AsyncStorage,StatusBar,
    SafeAreaView,Alert,Linking,Modal,ProgressViewIOS
} from 'react-native'
import {ButtonGroup,Button} from 'react-native-elements'
import {pk} from '../config/sty'
import Ionicons from 'react-native-vector-icons/Ionicons'
import  AntDesign from 'react-native-vector-icons/AntDesign'
// import clear from 'react-native-clear-cache';
import {inject,observer} from 'mobx-react'
@inject(["mbx"])
@observer // 监听当前组件
class Xie extends Component{
    static navigationOptions = {
        title: '用户隐私协议',
        // header:null,
        headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#fff',
      };
    constructor(props){
        super(props)
        this.state={
            selectedIndex: 0,
            cacheSize:"0",
            unit:"M",
        }
        
       
    }

tui=()=>{
    AsyncStorage.removeItem('ok')
    this.props.navigation.navigate('Login')
}

now_login=()=>{
    Alert.alert('Tips','Please login',[{'text':'cancel',},{'text':'ok',onPress:()=>{
   this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Login' })], 0) 
    }}])
}  
    render(){
        const login=this.props.mbx.login
        return (
        <SafeAreaView style={{flex:1,backgroundColor:'#000000',alignItems:'center'}}>
         <ScrollView contentContainerStyle={{padding:20}}>
             <Text style={{color:'white'}}>以下隐私协议是本APP对用户隐私保护的许诺，请您务必仔细阅读本协议，以了解我们关于管理您个人信息的情况。本隐私协议的全部条款属于本软件用户服务协议的重要部份之一。</Text>
             <Text style={{color:'white',marginTop:10}}>为了给您提供更准确、更有针对性的服务，本软件可能会以如下方式，使用您提交的个人信息。但本软件会以高度的勤勉义务对待这些信息，在未征得您许可的情况下，不会将这些信息对外公开或向第三方提供。</Text>
          <Text style={{color:'white',marginTop:10}}>
          一、保有您提供的信息

本软件会在您自愿选择服务或提供信息的情况下收集您的个人信息，并将这些信息进行整合，以便向您提供更好的用户服务。请您在注册时及时、详尽及准确的提供个人资料，并不断更新注册资料，符合及时、详尽准确的要求。所有原始键入的资料将引用为注册资料。如果因注册信息不真实而引起的问题，由您自行承担相应的后果。请您不要将您的帐号、密码转让或出借予他人使用。如您发现您的帐号遭他人非法使用，应立即通知本软件。因黑客行为或用户的保管疏忽导致帐号、密码遭他人非法使用，本软件不承担责任。

          </Text>
          <Text style={{color:'white',marginTop:10}}>
          二、保有您的使用记录

当您使用本软件的服务时，服务器会自动记录一些信息，包括手机型号、IP地址等。

在如下情况下，本软件会遵照您的意愿或法律的规定披露您的个人信息，由此引发的问题将由您个人承担：

（1）事先获得您的授权； 

（2）只有透露你的个人资料，才能提供你所要求的产品和服务； 

（3）根据有关的法律法规要求； 

（4）按照相关政府主管部门的要求；

（5）为维护本软件的合法权益。 

（6）您同意让第三方共享资料。 

（7）我们发现您违反了本软件的服务条款或使用规定。

（8）我们需要向代表我们提供产品或服务的公司提供资料（除非我们另行通知你，否则这些公司无权使用你的身份识别资料）。

          </Text>
          <Text style={{color:'white',marginTop:10}}>
          三、本《隐私政策》不适用于以下情况：

（1）通过我们的服务而接入的第三方服务（包括任何第三方网站）收集的信息。本政策仅适用于我们所收集的信息，并不适用于任何第三方提供的服务或第三方的信息使用规则，我们对任何第三方使用由您提供的信息不承担任何责任；

（2）通过在我们服务中进行广告服务的其他公司或机构所收集的信息。
          </Text>
          <Text style={{color:'white',marginTop:10}}>
          四、隐私权政策的修订

 我们可能适时修订本政策的条款，修订政策也是构成本政策的一部分。如修订政策造成您在本政策下权利的实质减少，我们将在修订生效前通过在主页上显著位置提示或向您发送电子邮件或以其他方式通知您。在该种情况下，若您继续使用我们的服务，即表示同意受经修订的本政策的约束。
          </Text>
          <Text style={{color:'white',marginTop:10}}>
          五、用户如何更正或投诉个人信息

如果您需要查询、修改或更正您的个人信息，或对个人信息保护问题有任何疑问或建议，您可以通过服务支持邮箱：FW1000@foxmail.com 联系我们。
          </Text>
         </ScrollView>
        </SafeAreaView>
        )
    }
}

export default Xie

const styles=StyleSheet.create({
    a:{
        width:pk.w*.9,height:pk.h*.08,
        backgroundColor:'#2C3E50',marginTop:50,borderRadius:6,
        alignItems:'center',justifyContent:'center'
    }
})