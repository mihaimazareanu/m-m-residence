import { UserContext } from '@/contexts/UserContext';
import React, { useContext } from 'react';
import styles from "./GuestDashboard.module.css"

function GuestDashboard() {
  const {user} = useContext(UserContext);
  return (
    <>
      <h2 className={styles.title}>Hello {user.firstName} {user.partner ? `& ${user.partner}` : ""}</h2>
      <h4 className={styles.title}>Welcome to our home</h4>
      <p className={styles.details}>The address is Windloh 30a, 22869 Hamburg. Our door is on the right side of the house towards the end of the driveway. You can park your car at the end of the drive way on the right side of the house or you can park in the street.</p>
      <h4 className={styles.title}>Our phone numbers are:</h4>
      <p className={styles.details}>Maike: 0049 163/8778205</p>
      <p className={styles.details}>Mihai: 0049 162/2490129</p>
      <p className={styles.details}>In case of bigger problems, call Maike&apos;s parents who live ten minutes away: 0049 40 8305559.</p>
      <h4 className={styles.title}>Kitchen</h4>
      <h6 className={styles.title}>Garbage under the sink</h6>
      <p className={styles.details}>Top drawer: Glass and paper</p>
      <p className={styles.details}>Bottom drawer: biological waste: left, residual waste: middle, plastic: right</p>
      <h4 className={styles.title}>Dish washer</h4>
      <p className={styles.details}>Tabs are in cleaning supplies (top cabinet above oven). Press the on button all the way on the left. Then press start button all the way on the right. Close machine. A blue light will tell you when the machine is working. Dish towels in red cabinet next to the oven.</p>
      <h4 className={styles.title}>Fridge</h4>
      <p className={styles.details}>Feel free to eat from the fridge. Just let us know if you&apos;ve finished something so we know to update our shopping list.</p>
      <h4 className={styles.title}>Living room</h4>
      <h6 className={styles.title}>TV</h6> 
      <p className={styles.details}>The TV can be turned towards the sofa. You need two remotes (big and small). Turn TV on with big remote. Then press OK on big remote to get rid of white box on screen. Now use small remote to navigate smart TV. You are welcome to use our Prime Video or Netflix account (Maike & Mihai) but if you buy or rent a movie, please send us the money on Paypal to mihai.mazareanu@gmail.com.</p>
      <h4 className={styles.title}>Internet</h4>
      <p className={styles.details}>The router is behind the couch.</p>
      <h6 className={styles.title}>Network: MaMi</h6>
      <h6 className={styles.title}>Password: 6286 7736 0520 9328 4810</h6>
      <h4 className={styles.title}>Vacuum cleaner</h4>
      <p className={styles.details}>A simple one for crumbs is hidden behind the curtain near the table. The better one is on the white cabinet in the hallway.</p>
      <h4 className={styles.title}>Heating</h4> 
      <p className={styles.details}>We have floor heating which can be turned up or down with the little controls under the light switches in each room.</p>
      <h4 className={styles.title}>Kids rooms</h4> 
      <p className={styles.details}>Feel free to use all the toys. Fresh sheets can be found under the bed in Theo&apos;s room or in the bottom drawer of the closet in Felix&apos; room.</p>
      <p className={styles.details}>The window blinds can be operated by pulling or pushing the stick on the right side of the window - but they sometimes get stuck, so you might need to manually roll them up.</p>
      <h4 className={styles.title}>Masters bedroom</h4>
      <p className={styles.details}>Fresh sheets and pillows/blankets under the bed.</p>
      <h4 className={styles.title}>Upstairs bathroom</h4>
      <p className={styles.details}>Please open the window after taking a shower. It can be opened with the control panel near the door. Press the little &quot;house&quot; icon to turn on the panel, then press window icons to open (right) or close (left) the window or choose a time after which the window will close automatically (clock icon). The window cannot be opened when it&apos;s raining outside.</p>
      <p className={styles.details}>Towels and toilet paper can be found under the sink or in the cabinet over the toilet. Emergency medication is in the medical cabinet behind the door.</p>
      <h4 className={styles.title}>Smoke detectors</h4> 
      <p className={styles.details}>Apparently, the smoke detectors want to be replaced after five years, so recently some of them started beeping once or twice and then stopped again. We&apos;ve already replaced those who have done that. But in case another one starts beeping and annoys you, just take it off the ceiling and take out the battery.</p>
      <h4 className={styles.title}>Trash cans outside behind the car park</h4>
      <p className={styles.details}>From left to right: residual waste (black), biological waste (green), paper(blue), plastic (yellow).</p>
      <p className={styles.details}>We wish you a great stay at our place and if there is anything that we can help you with while you are there, please don&apos;t hesitate to contact us.</p>
    </>
  )
}

export default GuestDashboard;
