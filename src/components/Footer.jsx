import { Link } from "react-router-dom"
import {Input} from "../components/ui/input"
import { motion } from "framer-motion"
import { descVariants, tagVariants, titleVariants } from "../../utils/animation"
export default function Footer() {
    return (
        <div className="bg-tertiary">
            <div className="container lg:grid lg:grid-cols-2 py-14">
                <div className="grid gap-4 pb-4 text-left lg:pb-0 lg:grid-cols-3">
                    <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    >
                        <h2 className="pb-4 text-xl font-semibold uppercase">
                            Company 
                        </h2>
                        <div className="flex flex-col">
                            <Link to="/" className="py-1 hover:underline">About Us</Link>
                            <Link to="/" className="py-1 hover:underline">Press</Link>
                            <Link to="/" className="py-1 hover:underline">Careers</Link>
                            <Link to="/" className="py-1 hover:underline">Contact</Link>
                        </div>
                    </motion.div>

                    <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={descVariants}>
                        <h2 className="pb-4 text-xl font-semibold uppercase">
                            Development 
                        </h2>
                        <div className="flex flex-col">
                            <Link to="/" className="py-1 hover:underline">Documentation</Link>
                            <Link to="/" className="py-1 hover:underline">Reference</Link>
                            <Link to="/" className="py-1 hover:underline">Changelog</Link>
                            <Link to="/" className="py-1 hover:underline">Status</Link>
                        </div>
                    </motion.div>

                    <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    >
                        <h2 className="pb-4 text-xl font-semibold uppercase">
                            Connect 
                        </h2>
                        <div className="flex flex-col">
                            <Link to="/" className="py-1 hover:underline">Instagram</Link>
                            <Link to="/" className="py-1 hover:underline">Twitter</Link>
                            <Link to="/" className="py-1 hover:underline">Linkedin</Link>
                            <Link to="/" className="py-1 hover:underline">Facebook</Link>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}>
                    <p className="pb-4 text-xl font-semibold">Stay Updated</p>
                    <div className="relative lg:max-w-sm">
                        <Input type="name" id="first name" placeholder="Email Address"/>
                        <button className="absolute bg-black text-white rounded-full h-10 text-sm px-3 top-2 right-2 hover:border-black hover:bg-white hover:text-black hover:border-2 dark:bg-primary">Subscribe</button>
                    </div>
                    <p className="pt-4 text-gray-500">
                        By subscribing to our newsletter, you agree to receive emails from us. Your personal data will be stored and processed in accordance with out Privacy Policy and you can unsubscribe at any time. 
                    </p>
                </motion.div>
            </div>
            {/* copyright */}
            <motion.div 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={descVariants}
            className="py-10 bg-black dark:bg-primary">
                <div className="container text-white text-center lg:justify-between lg:flex">
                    <div className="pb-4 lg:bg-0">
                        <p>&copy; 2024 Interior. All Rights Reserved</p>
                    </div>
                    <div>
                        <Link className="p-4 hover:underline" to={"/"}>Privacy</Link>
                        <Link className="p-4 hover:underline" to={"/"}>Terms</Link>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
