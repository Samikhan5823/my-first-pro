import React,{useState} from 'react'
// import './testing.css'
// import TreeView from 'react-tree-checkbox'

const nodes = [
    {
      value: 'animals',
      text: 'Animals',
      status: false,
      nodes: [
        {
          value: 'mammals',
          text: 'Mammals',
          status: false,
          nodes: [
            {
              value: 'cat',
              text: 'Cat',
              status: false,
              nodes: null,
            },
            {
              value: 'dog',
              text: 'Dog',
              status: false,
              nodes: null,
            },
          ],
        },
        {
          value: 'plants',
          text: <h1>Plants</h1>,
          status: true,
          nodes: null,
        },
      ],
    },
  ]

const Testingcs = () => {
    const [Nodes, setNodes] = useState(nodes)
  const [expanded, setExpanded] = useState([])
  const handleExpand = (newArray) => {
    console.log('handleExpand', newArray)
    setExpanded([...newArray])
  }
  const handleCheck = (treeNodes) => {
    console.log('handleCheck', treeNodes)
    setNodes([...treeNodes])
  }
  const handeleSave = (chklist) => {
    console.log('handeleSave', chklist)
  }
    return (
        <>
        <div>
               <div className="box1">
        {' '}
        bfdbfbdfhjdhjfhdffffffffffdjhcvjdhhhhhhh
        fsdfffdfsdfsdfsdfffffffffffffdssssssssssssgggg
      </div>
      <div className="box2">
        {' '}
        bfdbfbdfhjdhjfhdffffffffffdjhcvjdhhhhhhh
        fsdfffdfsdfsdfsdfffffffffffffdssssssssssssgggg
      </div>
      <div className='category'>
          <h2>Categories</h2>
      <ul >
        <li><a href='#'>categories</a></li>
        <li><a href='#'>categories</a></li>
        <li><a href='#'>categories</a></li>
        <li><a href='#'>categories</a></li>

      </ul> 
      </div>
      <h3>Form</h3>
      <form className='my-form'>
          <div className='form-group'>
              <label> Name</label>
                  <input type='text'></input>
          </div>
          <div className='form-group'>
              <label> Email</label>
                  <input type='text'></input>
          </div>
          <div className='form-group'>
              <label> Password</label>
                  <input type='text'></input>
          </div>
          <button type='submit'> Submit</button>2
      </form>
      <div className='block'>
          <h3>Heading1</h3>
          <p>dggdg dghgdyhsg hdujsghdusyb esdhg  b jhegrfgwem gbfuhgweb b hgfhd fbdhbfn  fgbsdf dfbdhfb  f dhb f dfhdgb
              dsdsdsd sd sds d sddddddddddd sds sdssssssssss fsdssssssssssss sdsdsssssssss dsdsd dsds dsddsdsd dsd dsd 
          </p>
      </div>
      <div className='block'>
          <h3>Heading2</h3>
          <p>dggdg dghgdyhsg hdujsghdusyb esdhg  b jhegrfgwem gbfuhgweb b hgfhd fbdhbfn  fgbsdf dfbdhfb  f dhb f dfhdgb
              dsdsdsd sd sds d sddddddddddd sds sdssssssssss fsdssssssssssss sdsdsssssssss dsdsd dsds dsddsdsd dsd dsd 
          </p>
      </div>
      <div id='main-block'>
          <p>dggdg dghgdyhsg hdujsghdusyb esdhg  b jhegrfgwem gbfuhgweb b hgfhd fbdhbfn  fgbsdf dfbdhfb  f dhb f dfhdgb
              dsdsdsd sd sds d sddddddddddd sds sdssssssssss fsdssssssssssss sdsdsssssssss dsdsd dsds dsddsdsd dsd dsd 
          </p>
      </div>
      <div id='sidebar'>
          <p>dggdg dghgdyhsg hdujsghdusyb esdhg  b jhegrfgwem gbfuhgweb b hgfhd fbdhbfn  fgbsdf dfbdhfb  f dhb f dfhdgb
              dsdsdsd sd sds d sddddddddddd sds sdssssssssss fsdssssssssssss sdsdsssssssss dsdsd dsds dsddsdsd dsd dsd 
          </p>
      </div>
    
        </div>
          <div className='clr'></div>
          <div className='p-box'>
              <h1>Hello</h1>
              <h2>Goodbye</h2>
          </div>
         
{/* 
<TreeView
      filternodes={Nodes}
      expanded={expanded}
      handleExpand={handleExpand}
      changeState={handleCheck}
    /> */}
          </>
    )
}

export default Testingcs
