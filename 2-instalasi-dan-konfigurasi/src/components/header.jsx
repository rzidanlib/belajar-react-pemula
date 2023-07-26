/* eslint-disable react/prop-types */

export default function Header({ author }) {
  return (<h1 className="heading">Belajar React Bareng {author ? author : "Zidan"} 👍</h1>)
}