import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Ionicons from '@expo/vector-icons/Ionicons';

import Feed from "../pages/Feed";
import Profile from "../pages/Profile";

const Tab = createBottomTabNavigator();

export default (props) => (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={
                ({route}) => (
                    {
                        tabBarIcon: ({focused, color, size}) => {
                            let iconName;

                            if(route.name === "Feed") {
                                iconName = focused ? "home" : "home-outline"; 
                            } else {
                                iconName = focused ? "person" : "person-outline";
                            }

                            return <Ionicons name={iconName} size={size} color={color} />
                        },

                        tabBarActiveTintColor: "#0f0",

                        tabBarInactiveTintColor: "#f00",

                        tabBarLabelStyle: {
                            fontSize: 24,
                            // display: none
                        },

                        tabBarStyle: {
                            margin: 10, padding: 10,
                        },
                    }
                )
            }
        >
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Feed" component={Feed} />
        </Tab.Navigator>
    </NavigationContainer>
);
