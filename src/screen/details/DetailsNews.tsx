import { Button, Image, ScrollView, Text, View } from "react-native"
import styles from "./Styles"

const DetailsNews = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.container}>
                <Image source={{  }} style={styles.image} />
                
                <Text style={styles.title}>title</Text>
                <Text style={styles.source}>source</Text>
                <Text style={styles.content}>content</Text>
                
                <Button onPress={() => null} title="Continue lendo"/>
            </View>
        </ScrollView>
    )
}

export default DetailsNews