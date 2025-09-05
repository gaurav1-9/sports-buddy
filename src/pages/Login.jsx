import { useState } from "react"
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const [role, setRole] = useState(0)
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center h-screen gap-5 lg:gap-10">
            <div className="flex items-center flex-col">
                <img
                    src="/Logo_image.png"
                    alt="logo"
                    draggable="false"
                    className="w-60 hidden lg:flex"
                />
                <div className="pt-4 lg:pt-2 flex flex-col justify-center items-center font-jaro text-floralWhite text-6xl lg:text-8xl lg:ml-2">
                    <p className='leading-8 lg:leading-12'>SPORTS</p>
                    <p>BUDDY</p>
                </div>
            </div>

            <div className="bg-blackOlive rounded-lg w-8/10 lg:w-1/3 h-75 lg:h-2/3 flex flex-col justify-center items-center mb-20 lg:mb-0 text-floralWhite font-josefinSans">
                <p className="text-xl lg:text-3xl font-semibold">USER TYPE</p>

                <div className="flex gap-3 lg:gap-6 mt-5">
                    <button className={`${role === 0
                        ? 'bg-flame'
                        : 'bg-timberWolf hover:bg-timberWolf/90 text-eerieBlack'}
                        rounded-md px-6 py-3 cursor-pointer font-semibold text-base lg:text-2xl pt-3.5 lg:pt-4`
                    }
                        onClick={() => setRole(0)}
                    >
                        <p>MEMBER</p>
                    </button>
                    <button className={`${role === 1
                        ? 'bg-flame'
                        : 'bg-timberWolf hover:bg-timberWolf/90 text-eerieBlack'}
                        rounded-md px-8 py-3 cursor-pointer font-semibold text-base lg:text-2xl pt-3.5 lg:pt-4`
                    }
                        onClick={() => setRole(1)}
                    >
                        <p>ADMIN</p>
                    </button>
                </div>

                <button
                    className="bg-flame rounded-full flex items-center p-0.5 mt-10 cursor-pointer hover:bg-flame/90"
                    onClick={() => console.log({ role, google: 'clickedBtn' })}
                >
                    <FcGoogle className="bg-floralWhite rounded-full text-4xl lg:text-5xl p-1" />
                    <p className="px-5 text-base lg:text-xl font-semibold">Sign in with Google</p>
                </button>
            </div>
        </div>
    )
}

export default Login