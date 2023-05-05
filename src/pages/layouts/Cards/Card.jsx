import React from 'react'
import OutLineBtn from '../../../components/ui/OutLineBtn'

const Card = () => {
  const cardProps = {
    icon:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    title: 'Test',
  }
  return (
    <div>
      <img
        className="h-[250px] max-w-[350px] object-cover "
        src="https://images.unsplash.com/photo-1586818079715-23345e13f2c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
      />
      {/* category name */}
      <span>Temple</span>

      {/* title card */}
      <h3 className="line-clamp-1">
        The Impact of the Khmer Rouge - Learn More About Cambodia
      </h3>

      {/* description */}
      <div className="description line-clamp-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ea quidem
        quos molestias illum vel deserunt, nihil minima accusantium ipsa
        consequatur ut exercitationem fugiat repellat maxime fugit esse tenetur
        eum, iusto quaerat tempora mollitia sequi obcaecati! Facilis ea nostrum
        iure doloribus vero nulla necessitatibus quasi harum voluptatem beatae
        dolorum officiis commodi possimus molestiae repudiandae iusto laudantium
        illo rem, quibusdam accusantium sit eveniet assumenda reiciendis!
        Repellat, at ex ad quo dicta placeat quisquam minus asperiores nisi iste
        illo harum. Dolore veritatis, culpa numquam vitae corporis ducimus
        laudantium porro assumenda iste asperiores optio, quis voluptatibus
        labore voluptate totam. Tenetur tempora numquam error, in aut vero
        exercitationem architecto cumque laborum inventore. Dolorem nobis, qui
        porro sunt enim quos accusantium suscipit perspiciatis veniam nihil,
        ipsum commodi aut veritatis, blanditiis libero. Possimus quidem nisi
        earum inventore harum velit perferendis quaerat quas repellendus
        quibusdam. Quod nostrum aliquam fugit fugiat earum facilis accusamus,
        perspiciatis sed facere dolorum. Error maiores ex doloribus sit
        assumenda, ipsa quas sed facere alias nostrum aliquam provident omnis
        recusandae porro nemo illo voluptatibus temporibus a suscipit est! Cum
        nihil illum et quis veniam quia id provident, in facere iure blanditiis
        quasi natus, placeat quas quisquam. Doloribus rem, corrupti,
        necessitatibus non vero architecto laborum, blanditiis cum fuga magni
        tempore praesentium tenetur fugiat. Nostrum repellendus, ex debitis sed
        maiores eligendi aspernatur architecto aliquid molestias explicabo
        voluptates, maxime quas, voluptatibus libero vitae praesentium qui totam
        eum deleniti corrupti! Dignissimos magni obcaecati cumque quasi
        voluptate necessitatibus accusantium ut eius numquam unde molestiae,
        quae hic minus sunt. Dignissimos ipsum iusto, sed voluptate incidunt qui
        natus repellendus! Sit dolores vel maiores illo aliquam saepe, debitis
        neque ad consequatur voluptatem quidem velit necessitatibus, recusandae
        asperiores, error facere sunt amet iste cupiditate fugiat ab est
        nesciunt! Mollitia corporis quo voluptates ab sapiente doloribus magnam
        impedit laborum odio, aut veritatis temporibus! Doloribus facilis
        aspernatur, vitae ratione eum sapiente natus, deserunt expedita culpa ex
        molestias ipsam? Eveniet totam incidunt maxime dignissimos consectetur
        sequi fugit ratione vitae velit ad laboriosam voluptates at quisquam
        blanditiis cumque, tempore saepe. Officiis ullam deleniti eos ab aliquid
        suscipit tempora doloremque molestiae doloribus soluta nostrum maxime,
        iusto atque! Eaque praesentium provident doloremque quae blanditiis
        voluptates, dolor laborum id laudantium et voluptate iure sequi libero
        molestias temporibus cum nobis nemo debitis quasi. Excepturi laudantium
        vitae, vero magnam hic nostrum corporis, iure ratione accusantium et
        quam animi nobis ipsam exercitationem amet veritatis dolorem rem, dolor
        delectus totam? Vitae dolore sequi sit.
      </div>

      {/* time date */}
      <span>2 hours ago</span>

      {/* btn */}
      <div className="btnGroup flex flex-row justify-between">
        <OutLineBtn title="autor name" />
        <OutLineBtn title={'200k like'} />
        <OutLineBtn title={'read later'} />
      </div>
    </div>
  )
}

export default Card
