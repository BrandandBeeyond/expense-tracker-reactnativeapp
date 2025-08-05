import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/Scaling";

export const HomeStyle = StyleSheet.create({
    mainBox:{
        height:verticalScale(45),
        width:'100%',
        backgroundColor:'#ffbb5f',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:horizontalScale(15),       
    },
    tabReal:{
       width:'50%'
    },
    expenseTitles:{
         fontSize:scaleFontSize(18),
         fontWeight:'600',
         color:'#010101',
        fontFamily:'Lato'
    }
})