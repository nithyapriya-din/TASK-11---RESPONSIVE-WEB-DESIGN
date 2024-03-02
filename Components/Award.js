import React from 'react'
import './Award.css'
import { FaStar } from "react-icons/fa";

const Award = () => {
  return (
    <div className='Award-head'>
        <h2><FaStar />Awards</h2>
      <div className='boxs'>
        <div className='box1'>
        <span><b>Jagattarini Gold Medal</b><br></br>
1945</span>
        <span>From the University of Calcutta for his work in Bengali Literature.
</span>
        </div>
        <div className='box2'>
        <span><b>Padma Bhushan</b><br></br>
1960</span>
        <span>One of the highest civilian honors of the Republic of India.
</span>
        </div>
        <div className='box3'>
        <span><b>National Poet</b></span>
        <span>Conferred the title by the Government of Bangladesh.
</span>
        </div>
        <div className='box4'>
        <span><b>Ekushey Padak</b><br></br>
1976</span>
        <span>Bangladesh's highest civilian honours.
</span>
        </div>
      </div>


      <div className='acheive'>
        <span>
                <h2>Poetry</h2>
                <p>
                • Agni Bina (The Fiery Lute), 1922<br></br>
• Sanchita (Collected poems), 1925<br></br>
• Phanimanasa (The Cactus), 1927<br></br>
• Chakrabak (The Flamingo), 1929<br></br>
•Satbhai Champa (The Seven Brothers of Champa), juvenile poems, 1933<br></br>
• Nirjhar (Fountain), 1939<br></br>
• Natun Chand (The New Moon), 1939<br></br>
• Morubhaskar (The Sun in the Desert), 1951<br></br>
• Sanchayan (Collected Poems), 1955<br></br>
• Nazrul Islam: Islami Kobita (A Collection of Islamic Poems; Dhaka, Bangladesh: Islamic Foundation, 1982)
                </p>
        </span>
        <span>
                <h2>Poems and songs</h2>
                <p>
                • Dolan Chapa (name of a faintly fragrant monsoon flower), 1923<br></br>
• Bisher Bashi (The Poison Flute), 1924<br></br>
• Bhangar Gan (The Song of Destruction), 1924 proscribe in 1924<br></br>
• Chhayanat (The Raga of Chhayanat), 1925<br></br>
Chittanama (On Chittaranjan), 1925<br></br>
• Samyabadi (The Proclaimer of Equality), 1926<br></br>
• Puber Hawa (The Eastern Wind), 1926<br></br>
• Sarbahara (The Proletariat), 1926<br></br>
• Sindhu Hindol (The Undulation of the Sea), 1927 Jinjir (Chain), 1928<br></br>
• Pralaya Shikha (Doomsday Flame), 1930 proscribed in 1930<br></br>
• Shesh Saogat (The Last Offerings), 1958<br></br>
                </p>
        </span>
      </div>
    </div>
  )
}

export default Award
