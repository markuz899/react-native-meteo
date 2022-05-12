import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Home = (props) => {
  const data = props.data;
  return (
    <LinearGradient style={styles.container} colors={["#ff2929", "#ffa72e"]}>
      <View style={styles.main}>
        <View style={styles.main.title}>
          <Text style={styles.main.title.text}>METEO APP</Text>
        </View>
        <View style={styles.main.temperature}>
          <Text style={styles.main.temperature.text}>Temperatura</Text>
          <Text style={styles.main.temperature.textTemp}>
            {Math.round(data.main.temp / 10)}°
          </Text>
        </View>
      </View>
      <View style={styles.detail}>
        <LinearGradient
          style={styles.detail.widget}
          colors={["#fff", "#d9d9d9", "#d9d9d9", "#d9d9d9"]}
        >
          <Text style={styles.detail.widget.city}>{data.name}</Text>
          <View style={styles.detail.widget.content}>
            <Text style={styles.detail.widget.text}>Umidità</Text>
            <Text style={styles.detail.widget.value}>
              {Math.round(data.main.humidity / 10)}°
            </Text>
          </View>
          <View style={styles.detail.widget.content}>
            <Text style={styles.detail.widget.text}>Temp. Min - Max</Text>
            <Text style={styles.detail.widget.value}>
              {Math.round(data.main.temp_min / 10)}° -{" "}
              {Math.round(data.main.temp_max / 10)}°
            </Text>
          </View>
          <View style={styles.detail.widget.content}>
            <Text style={styles.detail.widget.text}>Vento</Text>
            <Text style={styles.detail.widget.value}>
              {data.wind.speed} m/s
            </Text>
          </View>
        </LinearGradient>
      </View>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  main: {
    marginTop: 50,
    flexDirection: "column",
    title: {
      display: "flex",
      alignItems: "flex-end",
      padding: 20,
      text: {
        fontSize: 40,
        color: "#fff",
      },
    },
    temperature: {
      paddingTop: 50,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 50,
      flexDirection: "column",
      text: {
        textTransform: "uppercase",
        fontSize: 32,
        fontWeight: "bold",
        color: "#fff",
      },
      textTemp: {
        fontSize: 42,
        fontWeight: "bold",
        color: "#fff",
      },
    },
  },
  detail: {
    widget: {
      borderTopRightRadius: 50,
      padding: 20,
      city: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 20,
      },
      text: {
        fontSize: 25,
        fontWeight: "bold",
      },
      value: {
        fontSize: 32,
        fontWeight: "bold",
      },
      content: {
        marginBottom: 30,
      },
    },
  },
});
