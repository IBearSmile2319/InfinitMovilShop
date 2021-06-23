import { Tree, Switch } from 'antd';
import { CarryOutOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useSelector } from 'react-redux'
import ModalCategories from './ModalCategories';
import ModalUpdateCategory from './ModalUpdateCategory';
import ModalDeleteCategory from './ModalDeleteCategory';

const ListCategories = () => {
  const category = useSelector(state => state.category)
  const [showLine, setShowLine] = useState(true);
  const [showIcon, setShowIcon] = useState(false);
  const [showLeafIcon, setShowLeafIcon] = useState(true);

  const [catId,setCatId]=useState('')
  const [title,setTitle]=useState('')
  const [pId,setPId]=useState('')
  const onSelect = (e, i) => {
    setCatId(i.node.key)
    setTitle(i.node.title)
    setPId(i.node.parentId?i.node.parentId:'')
    console.log(i)
  };

  const onSetLeafIcon = (checked) => {
    setShowLeafIcon(checked);
    setShowLine({
      showLeafIcon: checked,
    });
  };

  const onSetShowLine = (checked) => {
    setShowLine(
      checked
        ? {
          showLeafIcon,
        }
        : false,
    );
  };

  const renderCategories = (categories) => {
    let MyCategories = [];
    for (let category of categories) {
      MyCategories.push(
        {
          title: category.name,
          key: category._id,
          icon: <CarryOutOutlined />,
          parentId:category.parentId?category.parentId:null,
          type:category.type?category.type:null,
          children: category.children.length > 0 ? renderCategories(category.children) : null
        }
      )
    }
    return MyCategories
  }
  return (
    <div>
      <div
        style={{
          marginBottom: 16,
          display: 'flex',
          justifyContent: "space-between"
        }}
      >
        <div>
          <div>
            Linas: <Switch checked={!!showLine} onChange={onSetShowLine} />
          </div>
          <br />
          <div>
            Iconos: <Switch checked={showIcon} onChange={setShowIcon} />
          </div>
          <br />
          <div>
            Icono de hoja: <Switch checked={showLeafIcon} onChange={onSetLeafIcon} />
          </div>
        </div>
        <div>
        <ModalDeleteCategory catId={catId} name={title} parentId={pId}/> <ModalUpdateCategory idcat={catId} title={title} parentId={pId} /> <ModalCategories /> 
        </div>
      </div>
      <Tree
        showLine={showLine}
        showIcon={showIcon}
        defaultExpandedKeys={['0-0-0']}
        onSelect={onSelect}
        treeData={renderCategories(category.categories)}
      />
    </div>
  );
};

export default ListCategories