import React, { useState } from 'react'
import CompanyImg from '../assets/images/png/company.png'
import ConstructionImg from '../assets/images/png/construction.png'
import KoinerImg from '../assets/images/png/koiner.png'
import Brandnameimg from '../assets/images/png/brandname.png'
import lemonwares from '../assets/images/png/lemonwares.png'
import Dinolfg from '../assets/images/png/Dinolfg.png'
import phptek from '../assets/images/png/phptek.png'
import trollmp from '../assets/images/png/Trollmp.png'
import nexai from '../assets/images/png/nexai.png'
import Furniture from '../assets/images/png/furniture.png'
import Cloopp from '../assets/images/png/cloopp.png'
import ImpTopic from '../assets/images/png/imptopic.png'
import CyberTise from '../assets/images/png/cybertise.png'
import Formvalid from '../assets/images/png/form-validation.png'
import Pixelperfect from '../assets/images/png/pixelperfect.png'
import viteslider from '../assets/images/png/Vite-project.png'
import Monthlist from '../assets/images/png/monthproject.png'
import doimg from '../assets/images/png/doimg.png'

const ProjectList = () => {
    const [opentab, setOpentab] = useState(1);
    return (
        <div className='bg-stone-50 min-h-screen pb-10'>
            <div className='container xl:max-w-[1164px] px-6 mx-auto'>
                <ul className='flex items-center justify-center mb-12 gap-10 pt-5'>
                    <li><a href="" onClick={(e) => { e.preventDefault(); setOpentab(1) }} className={`${opentab === 1 ? "text-teal-700" : ""} transition-all duration-300 ease-linear text-[30px] font-bold text-stone-800 `}>January</a></li>
                    <li><a href="" onClick={(e) => { e.preventDefault(); setOpentab(2) }} className={`${opentab === 2 ? "text-teal-700 " : ""} transition-all duration-300 ease-linear text-[30px] font-bold text-stone-800 `}>February</a></li>
                    <li><a href="" onClick={(e) => { e.preventDefault(); setOpentab(3) }} className={`${opentab === 3 ? "text-teal-700" : ""} transition-all duration-300 ease-linear text-[30px] font-bold text-stone-800 `}>March</a></li>
                    <li><a href="" onClick={(e) => { e.preventDefault(); setOpentab(4) }} className={`${opentab === 4 ? "text-teal-700" : ""} transition-all duration-300 ease-linear text-[30px] font-bold text-stone-800 `}>April</a></li>
                </ul>
                <div className='border-[2px] border-solid border-cyan-950 p-3 rounded-md'>
                    <div className={opentab === 1 ? "block" : "hidden"}>
                        <div className='flex justify-between items-center'>
                            <div className='w-[40%]'>
                                <img src={CompanyImg} alt="CompanyImg" className='w-full rounded-2xl' />
                            </div>
                            <div className='w-[55%]'>
                                <h3 className=' text-[28px] font-bold text-black mb-2'>GitHub Link:</h3>
                                <a href="https://github.com/khushi303/company" target='_blank' className='text-[22px] font-semibold hover:text-teal-700 transition-all duration-300 ease-linear'>https://github.com/khushi303/company</a>
                                <h3 className=' text-[28px] font-bold text-black mb-2 mt-4'>Live Link:</h3>
                                <a href="https://company-001-cebde.web.app/" target='_blank' className='text-[22px] font-semibold hover:text-teal-700 transition-all duration-300 ease-linear'>https://company-001-cebde.web.app/</a>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-10'>
                            <div className='w-[40%]'>
                                <img src={ConstructionImg} alt="ConstructionImg" className='w-full rounded-2xl' />
                            </div>
                            <div className='w-[55%]'>
                                <h3 className=' text-[28px] font-bold text-black mb-2'>GitHub Link:</h3>
                                <a href="https://github.com/khushi303/buildconstruction" target='_blank' className='text-[22px] font-semibold hover:text-teal-700 transition-all duration-300 ease-linear'>https://github.com/khushi303/buildconstruction</a>
                                <h3 className=' text-[28px] font-bold text-black mb-2 mt-4'>Live Link:</h3>
                                <a href="https://building-construction-001.netlify.app/" target='_blank' className='text-[22px] font-semibold hover:text-teal-700 transition-all duration-300 ease-linear'>https://building-construction-001.netlify.app/</a>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-10'>
                            <div className='w-[40%]'>
                                <img src={KoinerImg} alt="KoinerImg" className='w-full rounded-2xl' />
                            </div>
                            <div className='w-[55%]'>
                                <h3 className=' text-[28px] font-bold text-black mb-2'>GitHub Link:</h3>
                                <a href="https://github.com/khushi303/koiner" target='_blank' className='text-[22px] font-semibold hover:text-teal-700 transition-all duration-300 ease-linear'>https://github.com/khushi303/koiner</a>
                                <h3 className=' text-[28px] font-bold text-black mb-2 mt-4'>Live Link:</h3>
                                <a href="https://koiner-001.web.app/" target='_blank' className='text-[22px] font-semibold hover:text-teal-700 transition-all duration-300 ease-linear'>https://koiner-001.web.app/</a>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-10'>
                            <div className='w-[40%]'>
                                <img src={Brandnameimg} alt="Brandnameimg" className='w-full rounded-2xl' />
                            </div>
                            <div className='w-[55%]'>
                                <h3 className=' text-[28px] font-bold text-black mb-2'>GitHub Link:</h3>
                                <a href="https://github.com/khushi303/brandname" target='_blank' className='text-[22px] font-semibold hover:text-teal-700 transition-all duration-300 ease-linear'>https://github.com/khushi303/brandname</a>
                                <h3 className=' text-[28px] font-bold text-black mb-2 mt-4'>Live Link:</h3>
                                <a href="https://school-sharp-001.netlify.app/" target='_blank' className='text-[22px] font-semibold hover:text-teal-700 transition-all duration-300 ease-linear'>https://school-sharp-001.netlify.app/</a>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-10'>
                            <div className='w-[40%]'>
                                <img src={lemonwares} alt="lemonwares" className='w-full rounded-2xl' />
                            </div>
                            <div className='w-[55%]'>
                                <h3 className=' text-[28px] font-bold text-black mb-2'>GitHub Link:</h3>
                                <a href="https://github.com/khushi303/lemonwares" target='_blank' className='text-[22px] font-semibold hover:text-teal-700 transition-all duration-300 ease-linear'>https://github.com/khushi303/lemonwares</a>
                                <h3 className=' text-[28px] font-bold text-black mb-2 mt-4'>Live Link:</h3>
                                <a href="https://lemonwares-01.netlify.app/" target='_blank' className='text-[22px] font-semibold hover:text-teal-700 transition-all duration-300 ease-linear'>https://lemonwares-01.netlify.app/</a>
                            </div>
                        </div>
                    </div>
                    <div className={opentab === 2 ? "block" : "hidden"}>
                        <div className='flex justify-between items-center'>
                            <div className='w-[40%]'>
                                <img src={Dinolfg} alt="Dinolfg" className='w-full rounded-2xl' />
                            </div>
                            <div className='w-[55%]'>
                                <h3 className=' text-[28px] font-bold text-black mb-2'>GitHub Link:</h3>
                                <a href="https://github.com/khushi303/dinolfg" target='_blank' className='text-[22px] font-semibold hover:text-teal-700 transition-all duration-300 ease-linear'>https://github.com/khushi303/dinolfg</a>
                                <h3 className=' text-[28px] font-bold text-black mb-2 mt-4'>Live Link:</h3>
                                <a href="https://dinolfg-011.netlify.app/" target='_blank' className='text-[22px] font-semibold hover:text-teal-700 transition-all duration-300 ease-linear'>https://dinolfg-011.netlify.app/</a>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-10'>
                            <div className='w-[40%]'>
                                <img src={phptek} alt="phptek" className='w-full rounded-2xl' />
                            </div>
                            <div className='w-[55%]'>
                                <h3 className=' text-[28px] font-bold text-black mb-2'>GitHub Link:</h3>
                                <a href="https://github.com/khushi303/PHPTKpage" target='_blank' className='text-[22px] font-semibold hover:text-teal-700 transition-all duration-300 ease-linear'>https://github.com/khushi303/PHPTKpage</a>
                                <h3 className=' text-[28px] font-bold text-black mb-2 mt-4'>Live Link:</h3>
                                <a href="https://phptek--01.web.app/" target='_blank' className='text-[22px] font-semibold hover:text-teal-700 transition-all duration-300 ease-linear'>https://phptek--01.web.app/</a>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-10'>
                            <div className='w-[40%]'>
                                <img src={trollmp} alt="trollmp" className='w-full rounded-2xl' />
                            </div>
                            <div className='w-[55%]'>
                                <h3 className=' text-[28px] font-bold text-black mb-2'>GitHub Link:</h3>
                                <a href="https://github.com/khushi303/fortests/" target='_blank' className='text-[22px] font-semibold hover:text-teal-700 transition-all duration-300 ease-linear'>https://github.com/khushi303/fortests/</a>
                                <h3 className=' text-[28px] font-bold text-black mb-2 mt-4'>Live Link:</h3>
                                <a href="https://trollmp.netlify.app/" target='_blank' className='text-[22px] font-semibold hover:text-teal-700 transition-all duration-300 ease-linear'>https://trollmp.netlify.app/</a>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-10'>
                            <div className='w-[40%]'>
                                <img src={nexai} alt="nexai" className='w-full rounded-2xl' />
                            </div>
                            <div className='w-[55%]'>
                                <h3 className=' text-[28px] font-bold text-black mb-2'>GitHub Link:</h3>
                                <a href="https://github.com/khushi303/xoxgame/" target='_blank' className='text-[22px] font-semibold hover:text-teal-700 transition-all duration-300 ease-linear'>https://github.com/khushi303/xoxgame/</a>
                                <h3 className=' text-[28px] font-bold text-black mb-2 mt-4'>Live Link:</h3>
                                <a href="https://nex-ai-01.netlify.app/" target='_blank' className='text-[22px] font-semibold hover:text-teal-700 transition-all duration-300 ease-linear'>https://nex-ai-01.netlify.app/</a>
                            </div>
                        </div>
                    </div>
                    <div className={opentab === 3 ? "block" : "hidden"}>
                        <div className='flex justify-between items-center'>
                            <div className='w-[40%]'>
                                <img src={Furniture} alt="Furniture" className='w-full rounded-2xl' />
                            </div>
                            <div className='w-[55%]'>
                                <h3 className=' text-[28px] font-bold text-black mb-2'>GitHub Link:</h3>
                                <a href="https://github.com/khushi303/furnitureoriginal" target='_blank' className='text-[22px] font-semibold hover:text-teal-700 transition-all duration-300 ease-linear'>https://github.com/khushi303/furnitureoriginal</a>
                                <h3 className=' text-[28px] font-bold text-black mb-2 mt-4'>Live Link:</h3>
                                <a href="https://furniture-sofa.netlify.app/" target='_blank' className='text-[22px] font-semibold hover:text-teal-700 transition-all duration-300 ease-linear'>https://furniture-sofa.netlify.app/</a>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-10'>
                            <div className='w-[40%]'>
                                <img src={Cloopp} alt="Cloopp" className='w-full rounded-2xl' />
                            </div>
                            <div className='w-[55%]'>
                                <h3 className=' text-[28px] font-bold text-black mb-2'>GitHub Link:</h3>
                                <a href="https://github.com/khushi303/cloopp" target='_blank' className='text-[22px] font-semibold hover:text-teal-700 transition-all duration-300 ease-linear'>https://github.com/khushi303/cloopp</a>
                                <h3 className=' text-[28px] font-bold text-black mb-2 mt-4'>Live Link:</h3>
                                <a href="https://cloop-303.netlify.app/" target='_blank' className='text-[22px] font-semibold hover:text-teal-700 transition-all duration-300 ease-linear'>https://cloop-303.netlify.app/</a>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-10'>
                            <div className='w-[40%]'>
                                <img src={ImpTopic} alt="ImpTopic" className='w-full rounded-2xl' />
                            </div>
                            <div className='w-[55%]'>
                                <h3 className=' text-[28px] font-bold text-black mb-2'>GitHub Link:</h3>
                                <a href="https://github.com/khushi303/importanttopics" target='_blank' className='text-[22px] font-semibold hover:text-teal-700 transition-all duration-300 ease-linear'>https://github.com/khushi303/importanttopics</a>
                                <h3 className=' text-[28px] font-bold text-black mb-2 mt-4'>Live Link:</h3>
                                <a href="https://importanttopic.netlify.app/" target='_blank' className='text-[22px] font-semibold hover:text-teal-700 transition-all duration-300 ease-linear'>https://importanttopic.netlify.app/</a>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-10'>
                            <div className='w-[40%]'>
                                <img src={CyberTise} alt="CyberTise" className='w-full rounded-2xl' />
                            </div>
                            <div className='w-[55%]'>
                                <h3 className=' text-[28px] font-bold text-black mb-2'>GitHub Link:</h3>
                                <a href="https://github.com/khushi303/test-march" target='_blank' className='text-[22px] font-semibold hover:text-teal-700 transition-all duration-300 ease-linear'>https://github.com/khushi303/test-march</a>
                                <h3 className=' text-[28px] font-bold text-black mb-2 mt-4'>Live Link:</h3>
                                <a href="https://cybertise.netlify.app/" target='_blank' className='text-[22px] font-semibold hover:text-teal-700 transition-all duration-300 ease-linear'>https://cybertise.netlify.app/</a>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-10'>
                            <div className='w-[40%]'>
                                <img src={Formvalid} alt="Formvalid" className='w-full rounded-2xl' />
                            </div>
                            <div className='w-[55%]'>
                                <h3 className=' text-[28px] font-bold text-black mb-2'>GitHub Link:</h3>
                                <a href="https://github.com/khushi303/marchpractice" target='_blank' className='text-[22px] font-semibold hover:text-teal-700 transition-all duration-300 ease-linear'>https://github.com/khushi303/marchpractice</a>
                                <h3 className=' text-[28px] font-bold text-black mb-2 mt-4'>Live Link:</h3>
                                <a href="https://form-validation-001.netlify.app/" target='_blank' className='text-[22px] font-semibold hover:text-teal-700 transition-all duration-300 ease-linear'>https://form-validation-001.netlify.app/</a>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-10'>
                            <div className='w-[40%]'>
                                <img src={Pixelperfect} alt="Pixelperfect" className='w-full rounded-2xl' />
                            </div>
                            <div className='w-[55%]'>
                                <h3 className=' text-[28px] font-bold text-black mb-2'>GitHub Link:</h3>
                                <a href="https://github.com/khushi303/pixelperfect" target='_blank' className='text-[22px] font-semibold hover:text-teal-700 transition-all duration-300 ease-linear'>https://github.com/khushi303/pixelperfect</a>
                                <h3 className=' text-[28px] font-bold text-black mb-2 mt-4'>Live Link:</h3>
                                <a href="https://pixelperfect-seven.vercel.app/" target='_blank' className='text-[22px] font-semibold hover:text-teal-700 transition-all duration-300 ease-linear'>https://pixelperfect-seven.vercel.app/</a>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-10'>
                            <div className='w-[40%]'>
                                <img src={viteslider} alt="viteslider" className='w-full rounded-2xl' />
                            </div>
                            <div className='w-[55%]'>
                                <h3 className=' text-[28px] font-bold text-black mb-2'>GitHub Link:</h3>
                                <a href="https://github.com/khushi303/myviteproject" target='_blank' className='text-[22px] font-semibold hover:text-teal-700 transition-all duration-300 ease-linear'>https://github.com/khushi303/myviteproject</a>
                                <h3 className=' text-[28px] font-bold text-black mb-2 mt-4'>Live Link:</h3>
                                <a href="https://vite-slider.netlify.app/" target='_blank' className='text-[22px] font-semibold hover:text-teal-700 transition-all duration-300 ease-linear'>https://vite-slider.netlify.app/</a>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-10'>
                            <div className='w-[40%]'>
                                <img src={Monthlist} alt="Monthlist" className='w-full rounded-2xl' />
                            </div>
                            <div className='w-[55%]'>
                                <h3 className=' text-[28px] font-bold text-black mb-2'>GitHub Link:</h3>
                                <a href="https://github.com/khushi303/monthlyprojectlist" target='_blank' className='text-[22px] font-semibold hover:text-teal-700 transition-all duration-300 ease-linear'>https://github.com/khushi303/monthlyprojectlist</a>
                                <h3 className=' text-[28px] font-bold text-black mb-2 mt-4'>Live Link:</h3>
                                <a href="https://monthlyprojectlist.vercel.app/" target='_blank' className='text-[22px] font-semibold hover:text-teal-700 transition-all duration-300 ease-linear'>https://monthlyprojectlist.vercel.app/</a>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-10'>
                            <div className='w-[40%]'>
                                <img src={doimg} alt="doimg" className='w-full rounded-2xl' />
                            </div>
                            <div className='w-[55%]'>
                                <h3 className=' text-[28px] font-bold text-black mb-2'>GitHub Link:</h3>
                                <a href="https://github.com/khushi303/to-do-app" target='_blank' className='text-[22px] font-semibold hover:text-teal-700 transition-all duration-300 ease-linear'>https://github.com/khushi303/to-do-app</a>
                                <h3 className=' text-[28px] font-bold text-black mb-2 mt-4'>Live Link:</h3>
                                <a href="https://to-do-app-nu-gilt.vercel.app/" target='_blank' className='text-[22px] font-semibold hover:text-teal-700 transition-all duration-300 ease-linear'>https://to-do-app-nu-gilt.vercel.app/</a>
                            </div>
                        </div>
                    </div>
                    <div className={opentab === 4 ? "block" : "hidden"}>
                        <div className='w-full h-[100px] flex items-center justify-center'>
                            <p className='text-center text-[30px] font-bold'>Coming Soon</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectList