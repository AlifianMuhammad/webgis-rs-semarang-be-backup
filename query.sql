INSERT INTO rumah_sakit (smid, nama, kode, jenis, kelas, alamat, kelurahan, kecamatan, kode_pos)
VALUES
(1,'Rumah Sakit Nasional Diponegoro',3374367,'RS','C','Jl. Prof. H. Soedarto S.H No.1','Tembalang','Kec. Tembalang',50275),
(2,'RSUD Tugurejo',3374134,'RSUD','B','Jl. Walisongo No.137','Tambakaji','Kec. Ngaliyan',50185),
(3,'RSUD Wongsonegoro',3374342,'RSUD','B','Jl. Fatmawati No.1','Mangunharjo','Kec. Tembalang',50272)


INSERT INTO spesialis(id, nama_spesialis)
VALUES
(1,'THT'),
(2,'Syaraf'),




INSERT INTO rs_spesialis(id, rumah_sakit_smid, spesialis_id)
VALUES
(101,1,1),
(102,1,2),


INSERT INTO dokter(id, nama_dokter, rumah_sakit_smid, spesialis_id)
VALUES
(1001,'dr. Kanti Yunika, Sp.THT-KL(K)',1,1),
(1002,'dr. Anna Mailasari Kusuma Dewi, Sp. THT-K',1,1),
(1003,'dr. Zulfikar Naftali,',1,1),
(1004,'dr. Kanti Yunika, Sp.THT-KL',1,1),
(1005,'dr. Dwi Marliyawati, Sp.THT-KL, Msi.Med',1,1)