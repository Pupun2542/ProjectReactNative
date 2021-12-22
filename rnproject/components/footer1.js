import React from "react"
import { StyleSheet,Text,View } from "react-native"

const Footer = () => {

    const users = [
        {
            id:1,
            name:'John'
        },
        {
            id:2,
            name:'Mary'
        }
    ]


    return (
        <View>
            <Text style = {styles.title}></Text>
            {
                users.map((user,index)=>{
                    return <Text key={user.id}>{user.name}</Text>
                })
            }
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
    }
})