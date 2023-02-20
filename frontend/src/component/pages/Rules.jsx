import React from 'react'
import './Rules.css'
import Sidebar from '../Sidebar';
import NavBar from '../NavBar';

const Rules = () => {
    const rule = [
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat quam cumque, accusantium ipsum quibusdam porro culpa eum, ipsa facere pariatur debitis sapiente voluptas vero at ullam fuga deserunt cum iste.',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat quam cumque, accusantium ipsum quibusdam porro culpa eum, ipsa facere pariatur debitis sapiente voluptas vero at ullam fuga deserunt cum iste.',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat quam cumque, accusantium ipsum quibusdam porro culpa eum, ipsa facere pariatur debitis sapiente voluptas vero at ullam fuga deserunt cum iste.',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat quam cumque, accusantium ipsum quibusdam porro culpa eum, ipsa facere pariatur debitis sapiente voluptas vero at ullam fuga deserunt cum iste.',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat quam cumque, accusantium ipsum quibusdam porro culpa eum, ipsa facere pariatur debitis sapiente voluptas vero at ullam fuga deserunt cum iste.',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat quam cumque, accusantium ipsum quibusdam porro culpa eum, ipsa facere pariatur debitis sapiente voluptas vero at ullam fuga deserunt cum iste.',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat quam cumque, accusantium ipsum quibusdam porro culpa eum, ipsa facere pariatur debitis sapiente voluptas vero at ullam fuga deserunt cum iste.',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat quam cumque, accusantium ipsum quibusdam porro culpa eum, ipsa facere pariatur debitis sapiente voluptas vero at ullam fuga deserunt cum iste.',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat quam cumque, accusantium ipsum quibusdam porro culpa eum, ipsa facere pariatur debitis sapiente voluptas vero at ullam fuga deserunt cum iste.',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat quam cumque, accusantium ipsum quibusdam porro culpa eum, ipsa facere pariatur debitis sapiente voluptas vero at ullam fuga deserunt cum iste.'    
    ];
  return (
    <>
        <NavBar />
        <Sidebar />
        <div className='rulesBg'>
        <div className='rules'>
            <h2>Rules & Regulations</h2>
            <div className='overallRuleCard'>
                {
                    rule.map((rules, index) => 
                        <div className='ruleCard'>
                             {
                                index > 8 ? <p>{index+1}</p> : <p>0{index+1}</p>
                             }
                            {rules}
                        </div>
                    )
                }
                
            </div>
        </div>
        </div>
    </>
  )
}

export default Rules