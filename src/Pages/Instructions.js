import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Path, Svg } from "react-native-svg";

const Instructions = ({ navigation }) => {
  const instruction = [
    {
      content: "Umubare wibibazo",
      number: "20",
      icon: (
        <Svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.9754 0.000305176C11.0184 0.000305176 11.0605 0.00392131 11.1015 0.0108655L11.2383 0.0117052C11.4423 0.0117052 11.6373 0.0947052 11.7793 0.241705L16.8443 5.51871C16.9783 5.65771 17.0535 5.84471 17.0535 6.03771V15.2037C17.0713 17.7127 15.1173 19.7627 12.6043 19.8647L4.58534 19.8657H4.47634C2.0264 19.8103 0.0615052 17.8289 0.0016446 15.4029L0.00134277 4.49071C0.0593428 2.00971 2.10834 0.0117052 4.57134 0.0117052L10.8494 0.0108655C10.8904 0.00392131 10.9325 0.000305176 10.9754 0.000305176ZM10.2253 1.51131L4.57334 1.51171C2.91634 1.51171 1.54034 2.85371 1.50134 4.50871V15.2037C1.46434 16.9167 2.81434 18.3277 4.51034 18.3657H12.5743C14.2433 18.2967 15.5653 16.9097 15.5534 15.2097L15.5533 6.98331L13.5434 6.98431C11.7134 6.97931 10.2254 5.48731 10.2254 3.65931L10.2253 1.51131ZM10.7886 12.6084C11.2026 12.6084 11.5386 12.9444 11.5386 13.3584C11.5386 13.7724 11.2026 14.1084 10.7886 14.1084H5.38864C4.97464 14.1084 4.63864 13.7724 4.63864 13.3584C4.63864 12.9444 4.97464 12.6084 5.38864 12.6084H10.7886ZM8.74374 8.8564C9.15774 8.8564 9.49374 9.1924 9.49374 9.6064C9.49374 10.0204 9.15774 10.3564 8.74374 10.3564H5.38774C4.97374 10.3564 4.63774 10.0204 4.63774 9.6064C4.63774 9.1924 4.97374 8.8564 5.38774 8.8564H8.74374ZM11.7253 2.35231L11.7254 3.65931C11.7254 4.66331 12.5424 5.48131 13.5454 5.48431L14.7313 5.48331L11.7253 2.35231Z"
            fill="black"
          />
        </Svg>
      ),
    },
    {
      content: "Iminota kimara",
      number: "20/20",
      icon: (
        <Svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22C6.486 22 2 17.514 2 12C2 6.486 6.486 2 12 2ZM12 3.5C7.313 3.5 3.5 7.313 3.5 12C3.5 16.687 7.313 20.5 12 20.5C16.687 20.5 20.5 16.687 20.5 12C20.5 7.313 16.687 3.5 12 3.5ZM11.6612 7.0954C12.0762 7.0954 12.4112 7.4314 12.4112 7.8454V12.2674L15.8162 14.2974C16.1712 14.5104 16.2882 14.9704 16.0762 15.3264C15.9352 15.5614 15.6862 15.6924 15.4312 15.6924C15.3002 15.6924 15.1682 15.6584 15.0472 15.5874L11.2772 13.3384C11.0512 13.2024 10.9112 12.9574 10.9112 12.6934V7.8454C10.9112 7.4314 11.2472 7.0954 11.6612 7.0954Z"
            fill="black"
          />
        </Svg>
      ),
    },
    {
      content: "Amanota yose",
      number: "20",
      icon: (
        <Svg
          width="19"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.9088 0C16.0528 0 18.1648 2.153 18.1648 5.357V14.553C18.1648 17.785 16.1178 19.887 12.9498 19.907L5.25676 19.91C2.11276 19.91 -0.000244141 17.757 -0.000244141 14.553V5.357C-0.000244141 2.124 2.04676 0.023 5.21476 0.004L12.9078 0H12.9088ZM12.9088 1.5L5.21976 1.504C2.89176 1.518 1.49976 2.958 1.49976 5.357V14.553C1.49976 16.968 2.90476 18.41 5.25576 18.41L12.9448 18.407C15.2728 18.393 16.6648 16.951 16.6648 14.553V5.357C16.6648 2.942 15.2608 1.5 12.9088 1.5ZM12.7159 13.4737C13.1299 13.4737 13.4659 13.8097 13.4659 14.2237C13.4659 14.6377 13.1299 14.9737 12.7159 14.9737H5.49586C5.08186 14.9737 4.74586 14.6377 4.74586 14.2237C4.74586 13.8097 5.08186 13.4737 5.49586 13.4737H12.7159ZM12.7159 9.2872C13.1299 9.2872 13.4659 9.6232 13.4659 10.0372C13.4659 10.4512 13.1299 10.7872 12.7159 10.7872H5.49586C5.08186 10.7872 4.74586 10.4512 4.74586 10.0372C4.74586 9.6232 5.08186 9.2872 5.49586 9.2872H12.7159ZM8.25056 5.1104C8.66456 5.1104 9.00056 5.4464 9.00056 5.8604C9.00056 6.2744 8.66456 6.6104 8.25056 6.6104H5.49556C5.08156 6.6104 4.74556 6.2744 4.74556 5.8604C4.74556 5.4464 5.08156 5.1104 5.49556 5.1104H8.25056Z"
            fill="black"
          />
        </Svg>
      ),
    },
    {
      content: "Amanota yogutsindiraho",
      number: "14",
      icon: (
        <Svg
          width="17"
          height="21"
          viewBox="0 0 17 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.48362 0C9.61662 0 15.5616 2.041 16.3486 2.828C17.0046 3.484 16.9946 4.014 16.9486 6.554C16.9306 7.572 16.9056 8.959 16.9056 10.879C16.9056 17.761 9.03562 20.223 8.70062 20.324C8.62962 20.346 8.55662 20.356 8.48362 20.356C8.41062 20.356 8.33762 20.346 8.26662 20.324C7.93162 20.223 0.061623 17.761 0.061623 10.879C0.061623 8.962 0.036623 7.575 0.018623 6.557C0.0104088 6.10289 0.00334243 5.71298 0.00101713 5.37507L0.000732422 4.99377C0.00931055 3.74113 0.126873 3.32 0.619623 2.828C1.40462 2.041 7.34962 0 8.48362 0ZM8.48362 1.5C7.63562 1.5 2.28562 3.384 1.66862 3.899C1.48662 4.082 1.47962 4.4 1.51862 6.529C1.53662 7.555 1.56162 8.949 1.56162 10.879C1.56162 16.08 7.28362 18.389 8.48262 18.814C9.68062 18.387 15.4056 16.065 15.4056 10.879C15.4056 8.947 15.4306 7.552 15.4496 6.526C15.4876 4.399 15.4806 4.081 15.2876 3.889C14.6826 3.384 9.33162 1.5 8.48362 1.5ZM12.2051 7.3395C12.4981 7.6325 12.4981 8.1075 12.2051 8.4005L8.30712 12.2995C8.19512 12.4123 8.05048 12.4854 7.89522 12.5102L7.77712 12.5195C7.57812 12.5195 7.38712 12.4405 7.24612 12.2995L5.35412 10.4055C5.06212 10.1125 5.06212 9.6365 5.35512 9.3445C5.64712 9.0515 6.12312 9.0515 6.41612 9.3445L7.77712 10.7075L11.1451 7.3395C11.4381 7.0465 11.9121 7.0465 12.2051 7.3395Z"
            fill="black"
          />
        </Svg>
      ),
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.headers}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.goBack()}
        >
          <Svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M16.0303 4.46967C16.2966 4.73594 16.3208 5.1526 16.1029 5.44621L16.0303 5.53033L9.561 12L16.0303 18.4697C16.2966 18.7359 16.3208 19.1526 16.1029 19.4462L16.0303 19.5303C15.7641 19.7966 15.3474 19.8208 15.0538 19.6029L14.9697 19.5303L7.96967 12.5303C7.7034 12.2641 7.6792 11.8474 7.89705 11.5538L7.96967 11.4697L14.9697 4.46967C15.2626 4.17678 15.7374 4.17678 16.0303 4.46967Z"
              fill="black"
            />
          </Svg>
        </TouchableOpacity>
        <View>
          <Text style={{ fontSize: 20, fontFamily: "Jost-medium" }}>
            Ibyapa
          </Text>
        </View>
        <View></View>
      </View>
      <View style={{ padding: 30 }}>
        <View style={styles.contain}>
          <View style={styles.header}>
            <Text style={styles.headText}>AMABWIRIZA Y’IKIZAMINI</Text>
          </View>
          <View style={styles.contentContainer}>
            {instruction.map((item, index) => {
              return (
                <View key={index} style={styles.content}>
                  <View>{item.icon}</View>
                  <Text style={styles.contentText}>{item.content}</Text>
                  <Text style={{ fontFamily: "Jost-medium", color: "gray" }}>
                    {item.number}
                  </Text>
                </View>
              );
            })}
          </View>
          <TouchableOpacity style={styles.start}>
            <Text
              style={{
                fontFamily: "Jost-medium",
                color: "white",
                fontSize: 16,
              }}
            >
              Tangira Nonaha
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 10,
  },
  headers: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
    padding: 20,
  },
  back: {
    padding: 14,
    backgroundColor: "#FFFAF2",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#EEEEEE",
  },
  contain: {
    padding: 20,
    backgroundColor: "#FFFAF0",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#EEEEEE",
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  header: {
    padding: 20,
    backgroundColor: "#FFEBC9",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headText: {
    fontSize: 14,
    fontFamily: "Jost-bold",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 40,
    padding: 10,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  contentText: {
    fontSize: 14,
    fontFamily: "Jost-medium",
  },
  start: {
    backgroundColor: "#FF9F00",
    padding: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
export default Instructions;
