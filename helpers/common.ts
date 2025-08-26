import { Dimensions } from "react-native";

const { width: deviceWidth, height: deviceHeight }: { width: number; height: number } = Dimensions.get('window');

const hp = (percentage: number): number => {
    return (percentage * deviceHeight) / 100;
};

const wp = (percentage: number): number => {
    return (percentage * deviceWidth) / 100;
};