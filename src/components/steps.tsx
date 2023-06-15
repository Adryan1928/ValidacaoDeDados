import React from "react";
import { View, Text } from "react-native";
import { Step, Stepper, StepLabel } from "@mui/material"; 
// import StepLabel from '@mui/material/StepLabel';
import StepIndicator from 'react-native-step-indicator';

interface currentStepProps {
    currentStep: number
}

export function Steps({currentStep}: currentStepProps) {
    const STEPS = ['teste1', 'teste2']

    const customStyles = {
        stepIndicatorSize: 25,
        currentStepIndicatorSize:30,
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 3,
        stepStrokeCurrentColor: '#fe7013',
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: '#fe7013',
        stepStrokeUnFinishedColor: '#ffffff',
        separatorFinishedColor: '#fe7013',
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: '#fe7013',
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#ffffff',
        stepIndicatorLabelFontSize: 13,
        currentStepIndicatorLabelFontSize: 13,
        stepIndicatorLabelCurrentColor: '#fe7013',
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: '#aaaaaa',
        labelColor: '#999999',
        labelSize: 13,
        currentStepLabelColor: '#fe7013'

      }
    return (
            // <Stepper activeStep={currentStep} >
            //     {STEPS.map((Label) => (
            //         <Step key={Label}>
            //             <StepLabel><Text></Text></StepLabel>
            //         </Step>
            //     ))}
            // </Stepper>
            <View style={{flexDirection:'column'}} >
                <StepIndicator
                    direction="horizontal"
                    currentPosition={currentStep}
                    customStyles={customStyles}
                    labels={STEPS}
                    stepCount={STEPS.length}
                />
            </View>
    )
}