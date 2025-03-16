import imgPostone from '@shared/th-115304948.png' 
import imgPostwo from '@shared/th-1488879355.png' 
import reels from '@shared/icons8-instagram-reels-48.png'

const PostsPage = () => {
  return (
    <>
      <div className='search__people'>
          <input type="text" placeholder='Search...' />

          <div className='post__container'>
            <div className='post__img'>
              <img src={imgPostone} alt="" />
            </div>
            <div className='post__img position__img'>
              <img src={imgPostwo} alt="" />
              <img className='reels__img' src={reels} alt="" />
            </div>
            <div className='post__img'>
              <img src={imgPostone} alt="" />
            </div>
            <div className='post__img'>
              <img src={imgPostone} alt="" />
            </div>
            <div className='post__img'>
              <img src={imgPostone} alt="" />
            </div>
            <div className='post__img'>
              <img src={imgPostone} alt="" />
            </div>
            <div className='post__img position__img'>
              <img src={imgPostwo} alt="" />
              <img className='reels__img' src={reels} alt="" />
            </div>
            <div className='post__img position__img'>
              <img src={imgPostwo} alt="" />
              <img className='reels__img' src={reels} alt="" />
            </div>
            <div className='post__img position__img'>
              <img src={imgPostwo} alt="" />
              <img className='reels__img' src={reels} alt="" />
            </div>
          </div>
      </div>
    </>
  )
}

export default PostsPage