import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from './Pages/Onboarding';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import CoursesCategory from './Pages/CourseCategory';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RectButton } from 'react-native-gesture-handler';
import { Svg, Path, G } from 'react-native-svg';
import { View } from 'react-native';
import { Text } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

export const MaterialNavigation = () => {
  return (
    <Tab.Navigator


      screenOptions={({ route }) => ({
        headerShown: false,


        tabBarStyle: {
          backgroundColor: 'white',
          elevation: 0,



          height: 70,
          border: 0,
          padding: 10,
          paddingBottom: 10,
          paddingTop: 10,
          paddingHorizontal: 20

        },



        tabBarIcon: ({ focused, color, size }) => {
          let iconsName;
          let rn = route.name
          if (rn === "HomeTab") {
            iconsName = focused ? (
              <Svg width="32" height="32" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M7.61231 17.3111V14.763C7.61231 14.1125 8.14347 13.5852 8.79869 13.5852H11.1938C11.5085 13.5852 11.8102 13.7093 12.0327 13.9302C12.2552 14.1511 12.3802 14.4506 12.3802 14.763V17.3111C12.3782 17.5815 12.485 17.8416 12.677 18.0335C12.8689 18.2254 13.13 18.3333 13.4024 18.3333H15.0365C15.7997 18.3353 16.5323 18.0357 17.0726 17.5007C17.613 16.9656 17.9167 16.2391 17.9167 15.4815V8.22237C17.9167 7.61037 17.6434 7.02986 17.1705 6.63721L11.6117 2.22988C10.6447 1.45712 9.25926 1.48207 8.32115 2.28914L2.88917 6.63721C2.39395 7.01828 2.09796 7.60052 2.08333 8.22237V15.4741C2.08333 17.0532 3.37281 18.3333 4.96347 18.3333H6.56024C7.12602 18.3333 7.58583 17.8802 7.58993 17.3185L7.61231 17.3111Z" fill="#FF9F00" />
              </Svg>

            ) : (
              <>
                <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <Path d="M7.61231 17.3111V14.763C7.61231 14.1125 8.14347 13.5852 8.79869 13.5852H11.1938C11.5085 13.5852 11.8102 13.7093 12.0327 13.9302C12.2552 14.1511 12.3802 14.4506 12.3802 14.763V17.3111C12.3782 17.5815 12.485 17.8416 12.677 18.0335C12.8689 18.2254 13.13 18.3333 13.4024 18.3333H15.0365C15.7997 18.3353 16.5323 18.0357 17.0726 17.5007C17.613 16.9656 17.9167 16.2391 17.9167 15.4815V8.22237C17.9167 7.61037 17.6434 7.02986 17.1705 6.63721L11.6117 2.22988C10.6447 1.45712 9.25926 1.48207 8.32115 2.28914L2.88917 6.63721C2.39395 7.01828 2.09796 7.60052 2.08333 8.22237V15.4741C2.08333 17.0532 3.37281 18.3333 4.96347 18.3333H6.56024C7.12602 18.3333 7.58583 17.8802 7.58993 17.3185L7.61231 17.3111Z" fill="gray" />
                </Svg>
              </>

            )
          } else if (rn === "Courses") {
            iconsName = focused ?
              (
                <Svg width="32" height="32" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <Path fill-rule="evenodd" clip-rule="evenodd" d="M6.875 15C6.875 14.6548 7.15482 14.375 7.5 14.375H12.5C12.8452 14.375 13.125 14.6548 13.125 15C13.125 15.3452 12.8452 15.625 12.5 15.625H7.5C7.15482 15.625 6.875 15.3452 6.875 15Z" fill="#FF9F00" />
                  <Path fill-rule="evenodd" clip-rule="evenodd" d="M7.24946 1.04166H12.7503C12.9336 1.04161 13.074 1.04157 13.1968 1.05475C14.3252 1.17585 15.189 2.10255 15.2414 3.2251C16.2337 3.52141 16.9407 4.43957 16.9536 5.49264C17.4544 5.64291 17.8864 5.87995 18.24 6.26192C18.7833 6.8488 18.9518 7.57206 18.9582 8.4169C18.9643 9.22915 18.8196 10.2556 18.6398 11.5302L18.274 14.1249C18.1335 15.1217 18.0193 15.9313 17.8417 16.5658C17.6559 17.2297 17.3821 17.7758 16.875 18.1957C16.3719 18.6122 15.7751 18.7918 15.0696 18.8765C14.3875 18.9583 13.5294 18.9583 12.461 18.9583H7.53906C6.47065 18.9583 5.61251 18.9583 4.93039 18.8765C4.22494 18.7918 3.6281 18.6122 3.12503 18.1957C2.61793 17.7758 2.34405 17.2297 2.15824 16.5658C1.98063 15.9313 1.86649 15.1217 1.72598 14.1249L1.36016 11.5302C1.18043 10.2556 1.03569 9.22915 1.04186 8.4169C1.04827 7.57206 1.21664 6.8488 1.75997 6.26192C2.11351 5.88004 2.54538 5.64302 3.04607 5.49274C3.05882 4.43957 3.76598 3.52131 4.75838 3.22505C4.81079 2.10252 5.67453 1.17585 6.80299 1.05475C6.92578 1.04157 7.06625 1.04161 7.24946 1.04166ZM4.32418 5.2732C5.09568 5.20831 6.04144 5.20832 7.17995 5.20833H12.82C13.9583 5.20832 14.904 5.20831 15.6754 5.27316C15.5612 4.7668 15.1088 4.375 14.5514 4.375H5.44823C4.8908 4.375 4.43848 4.76681 4.32418 5.2732ZM13.0634 2.29761C13.5219 2.34682 13.8843 2.6886 13.9731 3.125H6.02675C6.11552 2.6886 6.47787 2.34682 6.93638 2.29761C6.98328 2.29258 7.05011 2.29166 7.28416 2.29166H12.7157C12.9497 2.29166 13.0165 2.29258 13.0634 2.29761ZM2.67723 7.11112C2.92964 6.83847 3.30922 6.65763 4.04677 6.55953C4.79772 6.45965 5.80298 6.45833 7.22699 6.45833H12.773C14.197 6.45833 15.2023 6.45965 15.9532 6.55953C16.6907 6.65763 17.0703 6.83847 17.3228 7.11112C17.5693 7.37743 17.703 7.73984 17.7082 8.4264C17.7136 9.13482 17.5835 10.069 17.3948 11.4069L17.0424 13.9069C16.8942 14.9576 16.7905 15.6842 16.638 16.2289C16.4912 16.7535 16.3183 17.0337 16.0778 17.2329C15.8332 17.4354 15.5048 17.5653 14.9207 17.6354C14.3218 17.7073 13.5388 17.7083 12.4205 17.7083H7.57947C6.46123 17.7083 5.67828 17.7073 5.07933 17.6354C4.49514 17.5653 4.16678 17.4354 3.9222 17.2329C3.68163 17.0337 3.50882 16.7535 3.36198 16.2289C3.2095 15.6842 3.10575 14.9576 2.95761 13.9069L2.60513 11.4069C2.41651 10.069 2.28644 9.13482 2.29182 8.4264C2.29703 7.73984 2.43068 7.37743 2.67723 7.11112Z" fill="#FF9F00" />
                </Svg>
              ) : (
                <>
                  <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M6.875 15C6.875 14.6548 7.15482 14.375 7.5 14.375H12.5C12.8452 14.375 13.125 14.6548 13.125 15C13.125 15.3452 12.8452 15.625 12.5 15.625H7.5C7.15482 15.625 6.875 15.3452 6.875 15Z" fill="#747474" />
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M7.24946 1.04166H12.7503C12.9336 1.04161 13.074 1.04157 13.1968 1.05475C14.3252 1.17585 15.189 2.10255 15.2414 3.2251C16.2337 3.52141 16.9407 4.43957 16.9536 5.49264C17.4544 5.64291 17.8864 5.87995 18.24 6.26192C18.7833 6.8488 18.9518 7.57206 18.9582 8.4169C18.9643 9.22915 18.8196 10.2556 18.6398 11.5302L18.274 14.1249C18.1335 15.1217 18.0193 15.9313 17.8417 16.5658C17.6559 17.2297 17.3821 17.7758 16.875 18.1957C16.3719 18.6122 15.7751 18.7918 15.0696 18.8765C14.3875 18.9583 13.5294 18.9583 12.461 18.9583H7.53906C6.47065 18.9583 5.61251 18.9583 4.93039 18.8765C4.22494 18.7918 3.6281 18.6122 3.12503 18.1957C2.61793 17.7758 2.34405 17.2297 2.15824 16.5658C1.98063 15.9313 1.86649 15.1217 1.72598 14.1249L1.36016 11.5302C1.18043 10.2556 1.03569 9.22915 1.04186 8.4169C1.04827 7.57206 1.21664 6.8488 1.75997 6.26192C2.11351 5.88004 2.54538 5.64302 3.04607 5.49274C3.05882 4.43957 3.76598 3.52131 4.75838 3.22505C4.81079 2.10252 5.67453 1.17585 6.80299 1.05475C6.92578 1.04157 7.06625 1.04161 7.24946 1.04166ZM4.32418 5.2732C5.09568 5.20831 6.04144 5.20832 7.17995 5.20833H12.82C13.9583 5.20832 14.904 5.20831 15.6754 5.27316C15.5612 4.7668 15.1088 4.375 14.5514 4.375H5.44823C4.8908 4.375 4.43848 4.76681 4.32418 5.2732ZM13.0634 2.29761C13.5219 2.34682 13.8843 2.6886 13.9731 3.125H6.02675C6.11552 2.6886 6.47787 2.34682 6.93638 2.29761C6.98328 2.29258 7.05011 2.29166 7.28416 2.29166H12.7157C12.9497 2.29166 13.0165 2.29258 13.0634 2.29761ZM2.67723 7.11112C2.92964 6.83847 3.30922 6.65763 4.04677 6.55953C4.79772 6.45965 5.80298 6.45833 7.22699 6.45833H12.773C14.197 6.45833 15.2023 6.45965 15.9532 6.55953C16.6907 6.65763 17.0703 6.83847 17.3228 7.11112C17.5693 7.37743 17.703 7.73984 17.7082 8.4264C17.7136 9.13482 17.5835 10.069 17.3948 11.4069L17.0424 13.9069C16.8942 14.9576 16.7905 15.6842 16.638 16.2289C16.4912 16.7535 16.3183 17.0337 16.0778 17.2329C15.8332 17.4354 15.5048 17.5653 14.9207 17.6354C14.3218 17.7073 13.5388 17.7083 12.4205 17.7083H7.57947C6.46123 17.7083 5.67828 17.7073 5.07933 17.6354C4.49514 17.5653 4.16678 17.4354 3.9222 17.2329C3.68163 17.0337 3.50882 16.7535 3.36198 16.2289C3.2095 15.6842 3.10575 14.9576 2.95761 13.9069L2.60513 11.4069C2.41651 10.069 2.28644 9.13482 2.29182 8.4264C2.29703 7.73984 2.43068 7.37743 2.67723 7.11112Z" fill="#747474" />
                  </Svg>
                </>
              )
          } else if (rn === "Quizes") {
            iconsName = focused ?
              (
                <View>

                  <Svg width="32" height="32" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/Svg">
                    <Path d="M13.0968 13.5195H7.08017" stroke="#FF9F00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M13.0968 10.0308H7.08017" stroke="#FF9F00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <Path d="M9.37609 6.55008H7.08025" stroke="#FF9F00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M13.2572 2.2915C13.2572 2.2915 6.85967 2.29484 6.84967 2.29484C4.54967 2.309 3.1255 3.82234 3.1255 6.13067V13.794C3.1255 16.114 4.5605 17.6332 6.8805 17.6332C6.8805 17.6332 13.2772 17.6307 13.288 17.6307C15.588 17.6165 17.013 16.1023 17.013 13.794V6.13067C17.013 3.81067 15.5772 2.2915 13.2572 2.2915Z" stroke="#FF9F00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </Svg>


                </View>


              ) : (
                <>
                  <View>
                    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/Svg">
                      <Path d="M13.0968 13.5195H7.08017" stroke="#747474" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <Path d="M13.0968 10.0308H7.08017" stroke="#747474" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <Path d="M9.37609 6.55008H7.08025" stroke="#747474" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <Path fill-rule="evenodd" clip-rule="evenodd" d="M13.2572 2.2915C13.2572 2.2915 6.85967 2.29484 6.84967 2.29484C4.54967 2.309 3.1255 3.82234 3.1255 6.13067V13.794C3.1255 16.114 4.5605 17.6332 6.8805 17.6332C6.8805 17.6332 13.2772 17.6307 13.288 17.6307C15.588 17.6165 17.013 16.1023 17.013 13.794V6.13067C17.013 3.81067 15.5772 2.2915 13.2572 2.2915Z" stroke="#747474" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </Svg>

                  </View>

                </>

              )

          } else if (rn === "Profile") {
            iconsName = focused ? (
              <Svg width="32" height="32" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M9.9873 12.7885C6.76428 12.7885 4.0119 13.2758 4.0119 15.2274C4.0119 17.179 6.74682 17.6837 9.9873 17.6837C13.2103 17.6837 15.9619 17.1956 15.9619 15.2448C15.9619 13.294 13.2278 12.7885 9.9873 12.7885Z" stroke="#FF9F00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M9.98729 10.0049C12.1024 10.0049 13.8167 8.28984 13.8167 6.17476C13.8167 4.05968 12.1024 2.3454 9.98729 2.3454C7.87221 2.3454 6.15711 4.05968 6.15711 6.17476C6.14999 8.2827 7.85317 9.99778 9.96031 10.0049H9.98729Z" stroke="#FF9F00" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round" />
              </Svg>

            ) : (
              <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M9.9873 12.7885C6.76428 12.7885 4.0119 13.2758 4.0119 15.2274C4.0119 17.179 6.74682 17.6837 9.9873 17.6837C13.2103 17.6837 15.9619 17.1956 15.9619 15.2448C15.9619 13.294 13.2278 12.7885 9.9873 12.7885Z" stroke="#747474" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M9.98729 10.0049C12.1024 10.0049 13.8167 8.28984 13.8167 6.17476C13.8167 4.05968 12.1024 2.3454 9.98729 2.3454C7.87221 2.3454 6.15711 4.05968 6.15711 6.17476C6.14999 8.2827 7.85317 9.99778 9.96031 10.0049H9.98729Z" stroke="#747474" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round" />
              </Svg>

            )
          }
          return iconsName

        }
      })}>
      <Tab.Screen name={'HomeTab'} component={Home} options={{ title: "Ahabanza" }} />
      <Tab.Screen name={'Quizes'} component={CoursesCategory} options={{ title: "Isuzuma" }} />
      <Tab.Screen name={'Courses'} component={Courses} options={{ title: "Amasomo", }} />
      <Tab.Screen name={'Profile'} component={Courses} options={{ title: "Umwirondoro", }} />
    </Tab.Navigator>
  )
}

function Navigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboard" component={Onboarding} />
      <Stack.Screen name="Home" component={MaterialNavigation} />

      <Stack.Screen name="Category" component={CoursesCategory} />

    </Stack.Navigator>
  );
}

export default Navigation