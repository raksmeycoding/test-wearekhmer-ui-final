import React from 'react'
import logo from '../../../assets/logo.png'

const Footer = () => {
  return (
    <div className="bg-[#374151] mt-4 pb-4 global-padding-x pt-4 text-white">
      <div className="logo">
        <img src={logo} alt="" srcset="" />
      </div>
      <div className="flex flex-row gap-4 ">
        <div className="aboutUs w-4/12">
          <div className="text-2xl uppercase text-center">About Us</div>
          <div className="py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            nesciunt maiores, ad possimus magni aliquam? Temporibus reiciendis
            dolores, numquam praesentium corporis, maxime, repellat modi sunt
            quidem fuga voluptates ex architecto dolorem nemo minima? Iure omnis
            perferendis accusantium, delectus minima, pariatur suscipit
            consequuntur nemo laborum ab adipisci aliquam animi quod, ipsam
            architecto qui ea earum unde. Autem esse iste totam harum nihil
            consectetur ipsum vero soluta et incidunt voluptas expedita nemo
            modi provident corporis quia, quam officiis numquam odit libero
            eligendi qui quidem? Eos culpa, fugit magnam magni, reprehenderit
            dolorum exercitationem quam perferendis alias, quia nihil. Quae,
            beatae? Recusandae, odio repellat.
          </div>
        </div>

        <div className="logaction w-4/12 flex flex-col justify-center items-center">
          <div className="title text-2xl uppercase text-center">Location</div>
          <iframe
            title="map"
            className="w-[400px] h-full py-4"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.9976164977934!2d103.86441077579991!3d13.412474505057851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3110168aea9a272d%3A0x3eaba81157b0418d!2sAngkor%20Wat!5e0!3m2!1sen!2skh!4v1683339783708!5m2!1sen!2skh"
            frameborder="0"
          ></iframe>
        </div>
        <div className="contactUs w-4/12 ">
          <div className="title text-2xl uppercase text-center">contact</div>
          <div className="description py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            corporis quisquam quasi maxime non ipsum eum dicta veniam! Beatae
            dolor reprehenderit dolore maxime harum consequuntur ab quos.
            Veritatis minus nam odio deserunt enim pariatur quo doloremque.
            Recusandae corrupti nobis qui tempora sint, amet laboriosam! Magni
            perferendis minima magnam fugiat numquam minus tempore rerum autem
            reiciendis nobis error, quidem placeat nam tenetur voluptas
            laudantium consectetur blanditiis quos sequi libero, harum deleniti
            ratione, cumque ut? Blanditiis temporibus quod facere asperiores
            veritatis necessitatibus, fugit itaque in cupiditate eaque,
            distinctio inventore atque dolore quidem voluptatum nisi cum minus
            ut nostrum aspernatur repellat ipsam. Praesentium!
          </div>
        </div>
      </div>

      <div className="right py-4">
        <div>2023 © WeAreKhmer. All right reserved</div>
      </div>
    </div>
  )
}

export default Footer
