import React from "react";
import './step.scss';

export interface StepProps {
  svg: React.ReactNode,
  stepNumber?: number,
  title: string,
  description: string,
}

export const StepComponent = (props: StepProps) => {
  return (
    <div className={'step-component'}>
      <div className={'circle'}>
        {props.svg}
        <div className={'number'}>{props.stepNumber}</div>
      </div>
      <div className={'step-name'} dangerouslySetInnerHTML={{__html: props.title}}></div>
      <div className={'step-description'} dangerouslySetInnerHTML={{__html: props.description}}></div>
    </div>
  )
}