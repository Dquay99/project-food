import './post.css';

export interface PostProps {
  name: string;
  title: string;
  image: string;
}

export const PostComponent = (props: PostProps) => {
  return (
    <div className={'post-component'}>
      <img src={props.image} alt="" className={'thumbnail'}/>
      <div className={'text-bold text-uppercase text-center'}>{props.name}</div>
      <div className={'text-center'}>{props.title}</div>
    </div>
  )
}