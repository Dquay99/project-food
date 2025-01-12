 import {Button, Carousel} from "antd";
import './slider.scss'
import {useNavigate} from "react-router-dom";

export interface SliderProps {
  items: Item[]
}

interface Item {
  image: string,
  title: string,
  description: string,
  path: string
}

export const SliderComponent = (props: SliderProps) => {

  const navigate = useNavigate();

  const goTo = (path: string) => {
    navigate(path)
  }
  return (
    <div className={'slider-component'}>
      <Carousel autoplay arrows>
        {
          props.items.map((item: Item, index: number) => (
            <div className={'item'} key={index}>
              <img src={item.image} alt=""/>
              <div className={'info'}>
                <div className={'title text-uppercase text-bold'}
                     dangerouslySetInnerHTML={{__html: item.title}}
                ></div>
                <div
                  className={'txt-expire'}
                  dangerouslySetInnerHTML={{__html: item.description}}
                ></div>
                <Button onClick={() => goTo(item.path)} type={'primary'} size={'large'}
                        className={'text-uppercase btn-show-detail'}>
                  xem chi tiết ưu đãi
                </Button>
              </div>
            </div>
          ))
        }
      </Carousel>
    </div>
  )
}