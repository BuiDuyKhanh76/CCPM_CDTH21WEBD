import logo from './logo.svg';
import './App.css';
import SanPham from './components/san_pham';
import LoaiSanPham from './components/loai_san_pham';

function App() {
  const dsLoaiSanPham = [
    {
      'ten': 'Loai san pham 1',
      'ds_san_pham':[
        {
          
          'hinh_anh': 'img/15.jpg',
          'ten': 'San pham 15',
          'gia': 1000
        },
        {
          'hinh_anh': 'img/14.jpg',
          'ten': 'Iphone 14',
          'gia': 2000
        }
      ]
    },
    {
      'ten': 'Loai san pham 2',
      'ds_san_pham':[
        {
          'hinh_anh': 'img/13.jpg',
          'ten': 'Iphone 13',
          'gia': 11000
        },
        {
          'hinh_anh': 'img/oppo.jpg',
          'ten': 'San pham oppo',
          'gia': 22000
        }
      ]
    }
  ];

  const listLoaiSanPhams = dsLoaiSanPham.map(function(item){
    return (
      <LoaiSanPham data={item}/>
    );
  });
  return (
    <>
    {listLoaiSanPhams}
    </>
  );
}

export default App;
