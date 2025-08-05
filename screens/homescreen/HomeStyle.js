import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/Scaling";

export const HomeStyle = StyleSheet.create({
    br:{
        width:horizontalScale(1),
        height:verticalScale(25),
        backgroundColor:'#414040ff',
    },
    mainBox:{
        height:verticalScale(45),
        width:'100%',
        backgroundColor:'#ffbb5f',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:horizontalScale(20),       
    },
    tabReal:{
       width:'50%',
       paddingHorizontal:horizontalScale(10),
    },
    expenseTitles:{
         fontSize:scaleFontSize(15),
         fontWeight:'600',
         color:'#010101',
        fontFamily:'Lato'
    }
})