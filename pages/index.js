import Head from 'next/head'
import Image from 'next/image'
import MiWuLa from "../images/miwula.jpg"
import Elbphilharmonie from "../images/elbphilharmonie.jpg"
import Landungsbruecken from "../images/landungsbruecken.jpg"
import Hagenbeck from "../images/hagenbeck.jpg"
import PlantenUnBlomen from "../images/planten_un_blomen.jpg"
import Michel from "../images/michel.jpg"
import Kunsthalle from "../images/kunsthalle.jpg"
import Alster from "../images/alster.webp"
import Fischmarkt from "../images/fischmarkt.jpg"
import IMM from "../images/imm.jpg"
import Wildpark from "../images/wildpark.jpg"
import Pony from "../images/pony.webp"
import Elbecamp from "../images/elbecamp.jpg"
import Rathaus from "../images/rathaus.jpg"
import Planetarium from "../images/planetarium.jpg"
import Dungeon from "../images/dungeon.jpg"
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>M&M Residence</title>
        <meta name="description" content="A website about our house" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Welcome to Hamburg</h1>
        <p>Hamburg, one of the largest cities in Germany, is a hub of culture, commerce, and tourism. With its beautiful architecture, stunning parks, and bustling nightlife, Hamburg attracts millions of visitors every year. Here are some of the most visited tourist attractions in Hamburg:</p>
        <h2 className={styles.title}>Top Tourist Attractions in Hamburg</h2>
        <article className={styles.attractions}>
          <section className={styles.attraction}>
            <h4 className={styles["attraction-title"]}>Miniatur Wunderland</h4>
            <p className={styles.description}>Miniatur Wunderland is a world-renowned model railway exhibition located in the heart of Hamburg, Germany. It features the world&apos;s largest miniature railway system with meticulously crafted landscapes, towns, and cities from around the world. The attention to detail is incredible, with everything from tiny people to moving vehicles, making it a must-see attraction for people of all ages. Visitors can explore different sections of the exhibition, including replicas of iconic landmarks such as the Grand Canyon, Mount Rushmore, and the Swiss Alps.</p>
            <p className={styles.description}>Miniatur Wunderland is located at Kehrwieder 2-4/Block D, 20457 Hamburg, Germany. Tickets can be booked in advance on their <a href="https://www.miniatur-wunderland.com/visit/tickets" aria-label="link to the ticket shop" target="_blank" rel='noreferrer'>website</a>. The attraction is easily accessible via public transport and is located close to the Elbphilharmonie and the HafenCity district. Visitors can also use the Google Maps location <a href='https://goo.gl/maps/QYMWHdR16w12pqi19' aria-label="link to google maps location" target="_blank" rel='noreferrer'> here</a> to find their way to Miniatur Wunderland.</p>
            <Image className={styles.photo} src={MiWuLa} alt="a photo from inside of miniatur wunderland" width={300} height={250} />
          </section>
          <section className={styles.attraction}>
            <h4 className={styles["attraction-title"]}>Elbphilharmonie</h4>
            <p className={styles.description}>Elbphilharmonie is a concert hall located in the HafenCity district in Hamburg and is one of the city&apos;s most iconic buildings. With its striking architecture and fantastic acoustics, Elbphilharmonie is a must-visit for any music lover. The concert hall features three concert halls, including the Grand Hall, which can accommodate up to 2,100 guests. Visitors can attend concerts or take a tour of the building, which includes a panoramic view of the city from its observation deck.</p>
            <p className={styles.description}>Elbphilharmonie is located at Platz der Deutschen Einheit 1, 20457 Hamburg, Germany. Visitors can book tickets for concerts or tours on the Elbphilharmonie <a href='https://www.elbphilharmonie.de/en/' aria-label="link to the website" target="_blank" rel='noreferrer'>website</a>. The website also provides information on upcoming events and concerts. For those interested in visiting, the location can be found on Google Maps <a href="https://goo.gl/maps/uZsJo55ZwP28g4nW9" rel='noreferrer' target="_blank" aria-label="link to google maps location">here</a>. </p>
            <p className={styles.description}>The stunning architecture of Elbphilharmonie and its world-class music make it a must-visit destination for anyone visiting Hamburg</p>
            <Image className={styles.photo} src={Elbphilharmonie} alt="a photo of the Elbphilharmonie" width={300} height={300} />
          </section>
          <section className={styles.attraction}>
            <h4 className={styles["attraction-title"]}>Landungsbrücken</h4>
            <p className={styles.description}>Landungsbrücken is a historic landmark in Hamburg, Germany, located on the waterfront of the Elbe River. This bustling area is home to numerous attractions, including the iconic Cap San Diego and Rickmer Rickmers ships, as well as the fascinating U-Boot Museum.</p>
            <p className={styles.description}>Cap San Diego is a beautifully restored cargo ship that now serves as a museum and event venue, offering visitors a glimpse into Hamburg&apos;s maritime history. The Rickmer Rickmers, on the other hand, is a tall ship built in 1896, which now functions as a museum and restaurant.</p>
            <p className={styles.description}>The U-Boot Museum is another popular attraction in Landungsbrücken, offering visitors a chance to explore the interior of a real submarine used during World War II.</p>
            <p className={styles.description}>In addition to these famous attractions, Landungsbrücken is also home to the Old Elbe Tunnel, a historic tunnel that was built in 1911 to connect the city center with the southern banks of the Elbe River. Visitors can take a walk through the tunnel and enjoy stunning views of the river.</p>
            <p className={styles.description}>Landungsbrücken is also a lively area with plenty of restaurants, shops, and street performers. Visitors can take a stroll along the waterfront or catch a boat tour of the harbor.</p>
            <p className={styles.description}>Landungsbrücken is located at Bei den St. Pauli-Landungsbrücken, 20359 Hamburg, Germany. Visitors can easily access the area via public transportation, with several bus and train lines stopping nearby.</p>
            <p className={styles.description}>For more information on visiting Landungsbrücken and its various attractions, including opening hours and ticket prices, visitors can check the official <a href="https://www.hamburg.com/sights/landungsbruecken/" aria-label='link to the website' target="_blank" rel="noreferrer">website</a>. The area&apos;s location can also be found on <a href="https://goo.gl/maps/SCWqgpFkSG23CchL8" aria-label='link to the google maps location' target="_blank" rel="noreferrer">Google Maps</a>, making it easy to plan your visit.</p>
            <p className={styles.description}>Overall, Landungsbrücken is a must-see destination for anyone visiting Hamburg, offering a fascinating glimpse into the city&apos;s maritime history and vibrant culture.</p>
            <Image className={styles.photo} src={Landungsbruecken} alt="a photo of the Landungsbrücken in the night, showing a tall building, the Elb river in the background and the cranes from the hamburg harbour" width={300} height={225} />
          </section>
          <section className={styles.attraction}>
            <h4 className={styles["attraction-title"]}>Hagenbeck Zoo</h4>
            <p className={styles.description}>Hagenbeck&apos;s Tierpark is a world-renowned zoo located in Hamburg, Germany. Founded in 1907, the zoo is known for its innovative approach to animal enclosures and conservation efforts. Visitors to Hagenbeck&apos;s Tierpark can see over 1,850 animals from 210 different species, including tigers, lions, elephants, and many more.</p>
            <p className={styles.description}>In addition to its animal exhibits, the zoo also features a tropical aquarium, a children&apos;s petting zoo, and a dolphin show. The zoo also offers guided tours and educational programs for visitors of all ages.</p>
            <p className={styles.description}>Hagenbeck&apos;s Tierpark is located at Lokstedter Grenzstraße 2, 22527 Hamburg, Germany. Visitors can book tickets for the zoo on the Hagenbeck&apos;s Tierpark <a href='https://www.hagenbeck.de' target="_blank" rel='noreferrer' aria-label='link to the webite'>website</a>, which also provides information on opening hours and upcoming events. The location of the zoo can be found on Google Maps <a href="https://goo.gl/maps/XVnRFfvp9XGtiRCd7" aria-label="link to the location" target="_blank" rel='noreferrer'>here</a>. </p>
            <p className={styles.description}>With its diverse range of animals and commitment to conservation, Hagenbeck&apos;s Tierpark is a must-visit destination for animal lovers and families visiting Hamburg.</p>
            <Image className={styles.photo} src={Hagenbeck} alt="a photo of the gate into the initial hagenbeck zoo" width={300} height={225} />
          </section>
          <section className={styles.attraction}>
            <h4 className={styles["attraction-title"]}>Planten un Blomen</h4>
            <p className={styles.description}>Planten un Blomen is a beautiful public park located in the heart of Hamburg, Germany. The name &quot;Planten un Blomen&quot; translates to &quot;Plants and Flowers&quot; in Low German, and the park is aptly named as it features an extensive collection of plant species and stunning flower displays.</p>
            <p className={styles.description}>The park covers an area of 47 hectares and includes several themed gardens, a large lake, playgrounds, and a mini-golf course. Visitors can also enjoy various cultural events throughout the year, such as open-air concerts and theater performances.</p>
            <p className={styles.description}>Planten un Blomen is located at St. Petersburger Straße 28, 20355 Hamburg, Germany, and can be easily reached by public transportation. The park is open year-round and admission is free. Visitors can check the official Planten un Blomen <a href="https://www.hamburg.com/explore/outdoors/11872624/planten-un-blomen/" aria-label="link to the website" target="_blank" rel='noreferrer'>website</a> for more information on events and opening hours.</p>
            <p className={styles.description}>The park&apos;s location can also be found on <a href="https://goo.gl/maps/SLbXYq9DvDLWDaBr5" aria-label="link to google maps" target="_blank" rel='noreferrer'>Google Maps</a>, making it easy to plan your visit.</p>
            <p className={styles.description}>Overall, Planten un Blomen is a must-see destination for nature lovers and those looking for a peaceful escape in the heart of the city. With its stunning botanical displays and diverse range of attractions, it&apos;s no wonder why it&apos;s a favorite among both locals and tourists.</p>
            <Image className={styles.photo} src={PlantenUnBlomen} alt="a photo of the park showing a small lake with platforms on it and some trees, bushes and flowers" width={300} height={225} />
          </section>
          <section className={styles.attraction}>
            <h4 className={styles["attraction-title"]}>St. Michaelis Church</h4>
            <p className={styles.description}>St. Michaelis Church, also known as Michel, is one of Hamburg&apos;s most iconic landmarks. Located in the heart of the city, this beautiful baroque-style church stands tall at 132 meters, offering stunning panoramic views of Hamburg&apos;s skyline.</p>
            <p className={styles.description}>The church was originally built in the 17th century, but it was destroyed and rebuilt twice, with the current structure dating back to the late 18th century. The interior of the church features beautiful artwork, including a large bronze baptismal font and an impressive organ with over 6,000 pipes.</p>
            <p className={styles.description}>In addition to regular church services, St. Michaelis Church also hosts a variety of concerts and events throughout the year, including the popular &quot;Summer in St. Michaelis&quot; festival.</p>
            <p className={styles.description}>St. Michaelis Church is located at Englische Planke 1, 20459 Hamburg, Germany. Visitors can access the church easily by public transportation, with several bus and train lines stopping nearby. Admission to the church is free, although donations are appreciated.</p>
            <p className={styles.description}>For more information on visiting St. Michaelis Church, including opening hours and upcoming events, visitors can check the official <a href="https://www.st-michaelis.de/en/" target="_blank" rel='noreferrer' aria-label='link to the website'>website</a>. The church&apos;s location can also be found on <a href='https://goo.gl/maps/pXvVTkrX57viF5XG9' aria-label="link to the google maps location" target="_blank" rel="noreferrer">Google Maps</a>, making it easy to plan your visit.</p>
            <p className={styles.description}>Overall, St. Michaelis Church is a must-see attraction for anyone visiting Hamburg, offering a fascinating glimpse into the city&apos;s history and culture. Whether you&apos;re interested in art, music, or simply want to enjoy breathtaking views of the city, a visit to St. Michaelis Church is a must.</p>
            <Image className={styles.photo} src={Michel} alt="a photo of the church from the outside" width={300} height={500} />
          </section>
          <section className={styles.attraction}>
            <h4 className={styles["attraction-title"]}>Hamburger Kunsthalle</h4>
            <p className={styles.description}>Hamburger Kunsthalle is a renowned art museum located in Hamburg, Germany. The museum features an extensive collection of European paintings from the Middle Ages to the present day, as well as a range of contemporary art exhibits. It is one of the largest and most important art museums in Germany, attracting visitors from around the world.</p>
            <p className={styles.description}>Located at Glockengießerwall 5, 20095 Hamburg, Germany, Hamburger Kunsthalle is easily accessible by public transportation. The museum is open every day except Monday, and admission fees vary depending on the exhibits on display. Visitors can check the official <a href='https://www.hamburger-kunsthalle.de/en/' arira-aria-label='link to the website' target="_blank" rel="noreferrer">website</a> for more information on opening hours, admission fees, and upcoming exhibits.</p>
            <p className={styles.description}>In addition to the museum&apos;s impressive collection, Hamburger Kunsthalle also offers a variety of educational programs and guided tours for visitors of all ages. The museum&apos;s location can be found on <a href='https://goo.gl/maps/Krd3syugFTEjb2mU9' aria-label='link to google maps location' target="_blank" rel="noreferrer">Google Maps</a>, making it easy to plan your visit.</p>
            <p className={styles.description}>Whether you&apos;re a seasoned art enthusiast or simply looking for a fascinating cultural experience, a visit to Hamburger Kunsthalle is not to be missed. With its extensive collection and engaging exhibits, it&apos;s a true gem of Hamburg&apos;s cultural scene.</p>
            <Image className={styles.photo} src={Kunsthalle} alt="a photo inside the museum" width={300} height={270} />
          </section>
          <section className={styles.attraction}>
            <h4 className={styles["attraction-title"]}>Alster lakes</h4>
            <p className={styles.description}>The Alster Lakes are one of Hamburg&apos;s most beautiful natural attractions, offering stunning views and a peaceful retreat from the hustle and bustle of the city. The lakes are actually two artificial bodies of water, the Inner Alster and the Outer Alster, and are situated in the heart of Hamburg&apos;s city center.</p>
            <p className={styles.description}>Visitors can enjoy a leisurely stroll or bike ride along the promenades surrounding the lakes, or take a boat tour to explore the lakes from a different perspective. There are also several parks and gardens around the lakes, providing the perfect spot for a picnic or a relaxing afternoon in the sun.</p>
            <p className={styles.description}>The Inner Alster is surrounded by several high-end shops and restaurants, making it a popular spot for upscale dining and shopping. The Outer Alster is larger and more tranquil, with several beaches and sailing clubs offering water sports activities.</p>
            <p className={styles.description}>The Alster Lakes are located at Jungfernstieg, 20354 Hamburg, Germany, and can be easily accessed by public transportation. Visitors can check the official <a href='https://www.hamburg.com/explore/outdoors/11855018/alster-lakes/' aria-label='link to the website' target="_blank" rel="noreferrer">website</a> for more information on events and activities, including boat tours and water sports rentals.</p>
            <p className={styles.description}>Whether you&apos;re looking for a peaceful retreat or an active day out on the water, the Alster Lakes are a must-visit destination for anyone exploring Hamburg.</p>
            <Image className={styles.photo} src={Alster} alt="a photo of inner alster lake with a boat on it and a fountain in the middle" width={300} height={240} />
          </section>
          <section className={styles.attraction}>
            <h4 className={styles["attraction-title"]}>Fish Market</h4>
            <p className={styles.description}>The Fish Market, or Fischmarkt in German, is a bustling open-air market located in the heart of Hamburg&apos;s St. Pauli district. The market has a long history, dating back to the 16th century when fishermen used to gather here to sell their catch of the day. Today, the market is a popular attraction for both locals and tourists alike.</p>
            <p className={styles.description}>The market opens every Sunday morning at 5 am, and visitors can expect to find a wide range of goods on offer, including fresh seafood, fruits and vegetables, flowers, and various souvenirs. Live music and entertainment add to the lively atmosphere of the market, making it a great place to start your Sunday morning in Hamburg.</p>
            <p className={styles.description}>The Fish Market is located at Große Elbstraße 9, 22767 Hamburg, Germany. Visitors can easily access the market by public transportation, with several bus and train lines stopping nearby. Admission to the market is free, although prices for goods may vary.</p>
            <p className={styles.description}>For more information on visiting the Fish Market, including opening hours and upcoming events, visitors can check the official <a href="https://www.fischauktionshalle.com/en/" aria-label='link to the website' target="_blank" rel="noreferrer">website</a>. The market&apos;s location can also be found on <a href="https://goo.gl/maps/aUXvCVjCeLR5ATqa9" aria-label='link to the google maps location' target="_blank" rel="noreferrer">Google Maps</a>, making it easy to plan your visit.</p>
            <p className={styles.description}>Overall, the Fish Market is a unique and vibrant attraction in Hamburg, offering visitors a glimpse into the city&apos;s maritime history and culture. Whether you&apos;re a seafood lover or just looking for a lively start to your Sunday morning, the Fish Market is definitely worth a visit.</p>
            <Image className={styles.photo} src={Fischmarkt} alt="a photo of the fisch market building from outside" width={300} height={225} />
          </section>
          <section className={styles.attraction}>
            <h4 className={styles["attraction-title"]}>International Maritime Museum</h4>
            <p className={styles.description}>The International Maritime Museum is a must-visit destination for anyone interested in the history of seafaring and ships. Located in Hamburg&apos;s historic Speicherstadt district, the museum houses an impressive collection of over 40,000 maritime artifacts and objects, including ship models, navigational instruments, and art pieces.</p>
            <p className={styles.description}>The museum is spread over ten floors, each dedicated to different aspects of maritime history, with exhibits ranging from Viking longboats to modern cruise ships. The highlight of the museum is the collection of model ships, which includes over 5000 models, making it one of the largest collections of its kind in the world.</p>
            <p className={styles.description}>The International Maritime Museum is located at Koreastraße 1, 20457 Hamburg, Germany, and can be easily reached by public transportation. Visitors can check the official <a href='https://www.imm-hamburg.de/museum/ausstellungsrundgang/tour-of-the-exhibitions-english/' aria-label='link to the website' target="_blank" rel="noreferrer">website</a> for information on opening hours and ticket prices.</p>
            <p className={styles.description}>For those interested in maritime history, the International Maritime Museum is a must-see attraction in Hamburg. With its extensive collection and fascinating exhibits, it provides a unique glimpse into the world of seafaring and the development of ships over time. The museum&apos;s location can also be found on <a href="https://goo.gl/maps/nz6WaYT6phcj2nMD6" aria-label='link to the google maps location' target="_blank" rel="noreferrer">Google Maps</a>, making it easy to plan your visit.</p>
            <Image className={styles.photo} src={IMM} alt="a photo of more model ships" width={300} height={250} />
          </section>
          <section className={styles.attraction}>
            <h4 h4 className={styles["attraction-title"]}>Wildpark Schwarze Berge</h4>
            <p className={styles.description}>Wildpark Schwarze Berge is a popular wildlife park located in the south of Hamburg. Covering over 50 hectares, the park is home to a variety of animals from Europe, including deer, bears, wolves, and lynx. Visitors can explore the park by foot, bike, or even by horse-drawn carriage, enjoying beautiful views of the surrounding countryside along the way.</p>
            <p className={styles.description}>In addition to the animals, Wildpark Schwarze Berge also features a large adventure playground for children, as well as a treetop trail and an educational nature trail. The park also hosts various events throughout the year, including seasonal festivals and animal feedings.</p>
            <p className={styles.description}>Wildpark Schwarze Berge is located at Am Wildpark 1, 21224 Rosengarten, Germany. Visitors can access the park by public transportation or by car, with ample parking available on site. Admission to the park is affordable, with discounts available for families and groups.</p>
            <p className={styles.description}>For more information on visiting Wildpark Schwarze Berge, including opening hours and upcoming events, visitors can check the official <a href="https://www.wildpark-schwarze-berge.de/" aria-label='link to the website' target="_blank" rel="noreferrer">website</a>. The park&apos;s location can also be found on <a href="https://goo.gl/maps/hFroZkxbHGWXwrBa8" aria-label='link to the google maps location' target="_blank" rel="noreferrer">Google Maps</a>, making it easy to plan your visit.</p>
            <p className={styles.description}>Overall, Wildpark Schwarze Berge is a fantastic destination for nature lovers and families alike, offering a fun and educational experience for all ages.</p>
            <Image className={styles.photo} src={Wildpark} alt="a photo showing 2 lynxes sitting in a tree" width={300} height={225} />
          </section>
          <section className={styles.attraction}>
            <h4 className={styles["attraction-title"]}>Klövensteen</h4>
            <p className={styles.description}>Klövensteen is a popular destination for nature lovers and families, and it&apos;s conveniently located close to our home. The park is a nature reserve covering over 400 hectares of forests and meadows, and it offers a variety of outdoor activities for visitors of all ages.</p>
            <p className={styles.description}>One of the highlights of Klövensteen is the Ponyhof Waldschänke, a cozy restaurant serving traditional German food and drinks. The restaurant is located in the heart of the park and offers a beautiful view of the surrounding nature. There is also a small farm where you can rent ponies and ride them. Ponyhof Waldschänke can be found at Babenwischenweg 28, 22559 Hamburg, which you can also find on <a href="https://goo.gl/maps/5ygFiLrriAn1pYKJA" aria-label='link to the website' target="_blank" rel="noreferrer">Google Maps</a>.</p>
            <p className={styles.description}>For families with children, the Waldspielplatz is a must-visit. This playground is located close to the Ponyhof Waldschänke and it features various climbing structures, swings, and slides, as well as a sandpit and a water play area.</p>
            <p className={styles.description}>Another attraction in Klövensteen is the Wildgehege Klövensteen, a wildlife enclosure where visitors can observe native animals such as deer, wild boar, and mouflon.</p>
            <p className={styles.description}>Klövensteen is located at Waldpark 1, 22559 Hamburg, Germany. Visitors can access the park easily by car or public transportation, with several bus and train lines stopping nearby. Admission to the park is free.</p>
            <p className={styles.description}>Overall, Klövensteen is a wonderful place to spend a day surrounded by nature and enjoying outdoor activities. With its beautiful landscapes, great food, and family-friendly attractions, it&apos;s no wonder why this park is a favorite among locals and visitors alike.</p>
            <Image className={styles.photo} src={Pony} alt="a wooden gate with the name Pony-Waldschaenke at the top" width={300} height={290} />
          </section>
          <section className={styles.attraction}>
            <h4 className={styles["attraction-title"]}>ElbeCamp Beach</h4>
            <p className={styles.description}>Elbecamp Beach is a hidden gem located near our home, perfect for families to spend their summer days. This stunning beach is situated on the banks of the Elbe River, offering breathtaking views and a peaceful atmosphere.</p>
            <p className={styles.description}>Elbecamp Beach offers a range of fun activities for children, including a playground and a water park. The beach also has several amenities, such as toilets, changing rooms, and showers, making it a convenient place to spend the day.</p>
            <p className={styles.description}>In addition to swimming and sunbathing, visitors can also enjoy a variety of water sports such as kayaking, paddleboarding, and windsurfing. Elbecamp Beach is a popular spot for fishing, too.</p>
            <p className={styles.description}>Overall, Elbecamp Beach is a great destination for families looking for a fun and relaxing day out. With its tranquil surroundings, beautiful views, and exciting activities, it is a must-visit attraction.</p>
            <p className={styles.description}>You can find the location on <a href="https://goo.gl/maps/jJUFaEXKDp9Y6kFx8" aria-label='link to the google location' target="_blank" rel="noreferrer">Google Maps</a>, making it easy to navigate your way to this hidden gem.</p>
            <Image className={styles.photo} src={Elbecamp} alt="a white sand beach with a slide for kids and 2 swings" width={300} height={225} />
          </section>
          <section className={styles.attraction}>
            <h4 className={styles["attraction-title"]}>City Hall</h4>
            <p className={styles.description}>Rathaus, also known as the Hamburg City Hall, is a magnificent neo-Renaissance building in the heart of Hamburg&apos;s city center. The building is home to the city&apos;s government and serves as the seat of the First Mayor of Hamburg and the Senate of the Free and Hanseatic City of Hamburg. The Rathaus is a must-visit attraction for tourists interested in Hamburg&apos;s rich history and architecture.</p>
            <p className={styles.description}>Built in 1897, the Rathaus boasts a grand facade adorned with statues, ornate decorations, and a large clock tower that looms over the city. The interior is equally impressive, with grand staircases, marble columns, and elaborate murals. Visitors can take guided tours of the building to learn about its history and architecture.</p>
            <p className={styles.description}>The Rathaus is located at Rathausmarkt 1, 20095 Hamburg, Germany. To plan your visit or learn more about the building, visit their <a href="https://www.hamburg.com/sights/history-and-heritage/11747650/city-hall/" aria-label="link to the website" target="_blank" rel="noreferrer">website</a> or check their <a href="https://goo.gl/maps/ocAmxW4bVEawrfPM9" aria-label='link to the google maps location' target="_blank" rel="noreferrer">Google Maps</a> location.</p>
            <Image className={styles.photo} src={Rathaus} alt="an aerial photo showing a plaza with the city hall building in the middle" width={300} height={290} />
          </section>
          <section className={styles.attraction}>
            <h4 className={styles["attraction-title"]}>Hamburg Planetarium</h4>
            <p className={styles.description}>Hamburg Planetarium, located in the Stadtpark, is a popular attraction for science enthusiasts and families alike. This modern planetarium offers visitors an immersive experience with state-of-the-art technology that projects stars, planets, and galaxies onto a giant dome. The planetarium offers various shows and exhibitions that are sure to delight visitors of all ages, from educational shows about the solar system to laser light shows set to popular music. Additionally, the planetarium offers astronomy workshops, lectures, and stargazing events throughout the year.</p>
            <p className={styles.description}>The Hamburg Planetarium is located at Linnering 1, 22299 Hamburg, making it easily accessible by public transportation or by car. Visitors can purchase tickets online or in person, and discounted rates are available for groups and families. For those looking for an out-of-this-world experience in Hamburg, the planetarium is a must-visit destination.</p>
            <p className={styles.description}>To learn more about Hamburg Planetarium, visit their <a href="https://www.planetarium-hamburg.de/en/" aria-label='link to the website' target="_blank" rel="noreferrer">website</a>. For the exact location and directions, check out <a href="https://goo.gl/maps/SXqYzpdPDpHXiUqaA" aria-label='link to the google maps location' target="_blank" rel="noreferrer">Google Maps</a>.</p>
            <Image className={styles.photo} src={Planetarium} alt="a red brick building with a sign Planetarium on it" width={300} height={300} />
          </section>
          <section className={styles.attraction}>
            <h4 className={styles["attraction-title"]}>Hamburg Dungeon</h4>
            <p className={styles.description}>Hamburg Dungeon is an exciting and unique attraction that takes visitors on a thrilling journey through 600 years of Hamburg&apos;s dark and creepy history. This immersive experience is designed to be both entertaining and educational, allowing visitors to learn about the city&apos;s gruesome past through interactive exhibits, live actors, and special effects. The Hamburg Dungeon is a must-see attraction for anyone interested in history or looking for an adrenaline-pumping adventure.</p>
            <p className={styles.description}>Located in the heart of Hamburg, the Hamburg Dungeon can be found at Kehrwieder 2, 20457 Hamburg, Germany. Visitors can easily reach the location by public transport or car, and parking is available nearby. The location can be found on <a href='https://goo.gl/maps/g3g7v9fnoCR3RdaZ8' aria-label='link to the google maps location' target="_blank" rel="noreferrer">Google Maps</a>The <a href="https://www.thedungeons.com/hamburg/en/" aria-label='link to the website' target="_blank" rel="noreferrer">website</a> provides detailed information on opening times, prices, and special events. Those who are brave enough to visit the Hamburg Dungeon are sure to have an unforgettable experience that they will remember for years to come.</p>
            <Image className={styles.photo} src={Dungeon} alt="a red brick building with a sign Hamburg Dungeon above the entrance" width={300} height={270} />
          </section>
        </article>
      </main>
    </>
  )
}
