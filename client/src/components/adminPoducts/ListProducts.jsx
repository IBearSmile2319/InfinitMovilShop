import { Table, Input, Button, Space, Tag } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';
import Card from '../Card';
import ModalProducts from './ModalProducts';
import { useSelector } from 'react-redux';
import DetailsProducts from './DetailsProducts';

const ListProducts = () => {
    const product = useSelector(state => state.product)
    const [state, setState] = useState({
        searchText: '',
        searchedColumn: '',
        loading: false,
    });
    let searchInput = '';
    const getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setState({
                                searchText: selectedKeys[0],
                                searchedColumn: dataIndex,
                            });
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => searchInput.select(), 100);
            }
        },
        render: text =>
            state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', color: 'white', padding: 0 }}
                    searchWords={[state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    const handleReset = clearFilters => {
        clearFilters();
        setState({ searchText: '' });
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Precio',
            dataIndex: 'price',
            key: 'price',
            ...getColumnSearchProps('price'),
        },
        {
            title: 'Stock',
            dataIndex: 'stock',
            key: 'stock',
            ...getColumnSearchProps('stock'),
        },
        {
            title: 'Categoria',
            dataIndex: 'category',
            key: 'category',
            ...getColumnSearchProps('category'),
            render: tags => (
                tags !== "..." ?
                    tags.map(t => (
                        <Tag color="geekblue">{t.name.toLowerCase()}</Tag>
                    ))
                    :
                    <Tag color="red">{tags.toLowerCase()}</Tag>
            ),
        },
    ];

    const renderProducts = (product) => {
        let data = [];

        for (let p of product) {

            data.push({
                key: p._id,
                name: p.name,
                price: p.price,
                stock: p.quantity,
                description: p.description,
                category: p.category ? p.category : "...",
                pImg: p.productPictures
            })
        }
        return data
    }
    return (
        <div>
            <Card>
                <div
                    style={{
                        marginBottom: 16,
                        display: 'flex',
                        justifyContent: "space-between"
                    }}
                >
                    <div>

                    </div>
                    <ModalProducts />
                </div>
            </Card>
            <Table
                expandRowByClick
                expandable={{
                    expandedRowRender: record => <DetailsProducts {...record} />,
                    rowExpandable: record => record.name !== 'Not Expandable',
                }}
                columns={columns} dataSource={renderProducts(product.products)} size="middle" scroll={{ x: 440 }} bordered />
        </div>
    )

}

export default ListProducts
