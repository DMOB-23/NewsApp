import { Image, Text, View } from "react-native"
import { NewsItemProps } from "./interface"
import styles from "./Styles"

const NewsItem = ({ article }: NewsItemProps) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: article.urlToImage }} 
                style={styles.cover}/>

            <Text style={styles.title}>{article.title}</Text>
            <View style={styles.detailsContainer}>
                <Text style={styles.source}>{article.source.name}</Text>
                <Text style={styles.date}>{article.publishedAt}</Text>
            </View>
        </View>
    )
}

export default NewsItem