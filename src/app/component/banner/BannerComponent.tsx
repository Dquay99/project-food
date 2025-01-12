import './banner.scss';

export const BannerComponent = () => {
  return (
    <div className={'banner-component'}>
      <div className={'left'}>
        <div className={'title text-bold'}>
          Tiệc tại gia, chất nhà hàng
        </div>
        <div className={'description'}>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio pariatur, tenetur. Officiis porro repellendus
            sint veritatis. Dolorem eum impedit quia sequi totam. A aliquam commodi quasi quo tempora tempore velit
            voluptate! Blanditiis ducimus eum nulla ut? Ab alias corporis cumque ea esse facere fugit id itaque qui
            ratione! Ab aliquid autem doloremque doloribus earum, enim eos error necessitatibus neque officiis placeat
            reiciendis veritatis vero. Accusantium autem laborum maxime.
          </div>
          <div>
            Asperiores nulla officiis omnis vitae. Alias
            autem consectetur deleniti eaque earum esse et excepturi expedita, ipsa laboriosam libero molestias
            perferendis provident quasi quibusdam repellendus rerum saepe sequi similique sit veniam vero voluptate.
          </div>
        </div>
      </div>
      <div className={'right'}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/WW0SLuX8HsI?si=jkldtBwlhF4gkilL"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
  )
}