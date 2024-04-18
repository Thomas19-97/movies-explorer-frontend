const movies = [
    {
      id: 1,
      title: '33 слова о дизайне',
      duration: '1ч42м',
      image: 'https://s3-alpha-sig.figma.com/img/71a2/3794/3bfd6b9af4141d2ee15e36a186b073a7?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AILpP5-BfmU~Oyu2ElhHk-A2EnrkZBFy1VaTTzGXfEkSuzjDO4k8mhhVpNQsgMlBt~SJQMSWO~EuVw~F9r5mG8tlamlFHyfO4I7O3MZ4lKgB4LpJ-jATD9-hq2lTGXw3pgcDKuGJAHXbiGCSxLD2SozVzpFGK5ziOboi5w1AW7-dY9XxoTR9tsft7emzCDk5vo2z21CMc~LcJj9q-Sanj2a0kKQC7zGEmorW3d8uq6OSqBJNcvfjIpgzN10SSzplSfv2I-w6Ny5R5ZuThQmN1c3LAVQg-IE5lAdkRFdZw~ajN5ME6Om4R7Xd1VMUmiSbJMyKuZchqF-5Ajj6-gtq4Q__',
    },
    {
      id: 2,
      title: 'Киноальманах «100 лет дизайна»',
      duration: '1ч 42м',
      image: 'https://s3-alpha-sig.figma.com/img/90ba/2e4b/e072f3f38937c7f5d592d64f3fa59f33?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nPjRhbLCzpsgEW18qA3u2atHfYT9R5GXcDgO2JrMFwNoNsAQZcr9Xyh5K5FW~C-ODSzp~Vj8U7fIIrd2qCUCqOOUyIMGQMIbIhsA9tuhs7o7RG1Q6cv8kvxkLwoNyuN2pcHvk7F0QS~5cUmWEsyJx5T0G3DzZKgomvb5BvKkVVK-0bSdmIx8FrpE6pluIfbOz4R0SCMEnve67CRu7kU86QpyGGdK6WHM~gVoQ0bkq1byVSJX0IyUWObsPYU2nIjcSowVEKztDLCl9UYBD-XVEkkSeXi9dQ7AgXao5WW43jDFQBlTG1FG799X-cqJ79Tb1c93U8-l6zENQpy8JzSaXQ__',
    },
    {
      id: 3,
      title: 'В погоне за Бенкси',
      duration: '1ч 42м',
      image: 'https://s3-alpha-sig.figma.com/img/7501/fcae/58fcf299e5a04c29cb37e6280c83da16?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H8bh17Lbc-82FJZqnGC8bkCTgihs4scZBVqrSTsgkeBGctB4PFQB83ulmMhalDn9w~5PzrlNTAx3RwjdiXkrvzINjtSzJj6n7ETYkZPN2J-vgbfMQ2GlHkW-a2jnp5Yu0w0ifnoZm46mfAXOGo5VXzJ6q6VCDMwWQf2aPCGqsxpR-D7DpzXmPVZtk80mdtX0keWXo2UUOV60jVgGTu6UwyM5ba2slgxS2C3v5nPCgNNdMEBK-nT6v84D5sYs7QA1IYeucPU5Uc2lAasvEdiYQPHJoqPOxVyAdYAorukF8OTPA2gidPhfhF6VjrcdWdWN9InbTjIv65lFqoQA7gh~ww__',
    },
    {
      id: 4,
      title: 'Баския: Взрыв реальности',
      duration: '1ч 42м',
      image: 'https://s3-alpha-sig.figma.com/img/96cc/9d30/2e6653f8a2dbac83b4795cc1e846a243?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fzG8I46pwU0JfgBD7-FqRHDVF~lNvdSy5Kc3e5rldr2MTmmFcdleyGLkZVyZtpRvtqUAOiqcgZXGuzR2LWgm878av2VOy28RfEOqnaFYScfCSyLaCW0WsdyAvmHLTfLilNWjFn4YkNkAjl1BY~eXqs4g9BEoHIp1KpucgOmv0rUhIhTeA-5uvcj4glf1gzDzDgH~xeeRojdZI1RQPuxXsC7m~UMhMsVrMG301wIBglbNYwgI~sZRMfDf1-wY~cFTL3IXhou7nZtna4p~PzUqfWWkocky4nwC2PPkKv~Y76aDJzOTsmm1ckMapWXQTZibnDEmVmMa9KgrWUhJbA6TNw__',
    },
    {
      id: 5,
      title: 'Бег это свобода',
      duration: '1ч 42м',
      image: 'https://s3-alpha-sig.figma.com/img/b5e4/a6cb/ff07e856bc14f2c67fd3d453609875e8?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=epUsKq2BeMsPIEtNH-v6yX44oLfEpxmL2azej093WpVD9bMvh0q9l2wbeqy0I0NmjWlYz3~s-Yp5YW5GvcnbG30xgQsTnOf-gRe3K6nvfUbKMJmRM04fDJpOy64i9If~e83z5Q-v5R5nA-Hn6V8AChLV-Qg1rNtdABJgyi0Kg2LBjL6IXBJF-hFs-dSUT8KzHuocnO2dIQsoVNhDf7CVU9mVG7PNfk3Pcc0Fwxv2ehRL~Yt03V8XkwLwq4JIr1sDa9VzEofmkO5eJKNO1nRFKoN200F5i4ecZb-kuW5w82n5fxp7vR7yFkJwES96YCR1~mOBfxLTZVRzwEpA42aF1Q__',
    },
    {
      id: 6,
      title: 'Книготорговцы',
      duration: '1ч 42м',
      image: 'https://s3-alpha-sig.figma.com/img/199d/35fd/ed1213c8b6d45652874df917fdcefb3b?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dE16oaplZ3UCl5CNy5kM9zQCkcwjfQsWQSTXfjkZafAYSmfvzKocKpdxByJcpOozYXKG0bgcek-TydpX6OwMO7G6XNjP0b~--2yAjBU7dITiP2fBTBjLr1cfdU4sqzwSvw4x087NCscaxviPBZG2jiELNG4lICgKrHiGG7-lOYEOnWLfup5pVs4MoiqEWQ38A3QQLhKhRPasCcjWQB0j~WUn919Qj42XMkameCoIX6E6chhsa3zkNebtrERUZYqz27J6x4Vljj5yD1olvE8plgq-9bjvkU3Na-ws-joWMM5yIPDh-RN8Z9-DygNluywMRuxkfi-~7tFcOhyNWholdw__',
    },
    {
      id: 7,
      title: 'Когда я думаю о Германии ночью',
      duration: '1ч 42м',
      image: 'https://s3-alpha-sig.figma.com/img/16ca/4833/dee0e587ee02e0b9181fbac58ce0aeee?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TXWyJFi~t46RYXBzdED8fxvHlmvAx2gMi4TJiLH4nFNtQehLWU9OMcAMMOsnPM8MYIXefLkVR1lxnvJJfs7kPqT3kw0txV~5YI50N2JJ4AU46j4rPhihFbUuxzeJlHt8E6lfBVJFQeLMBfE5R1c3b64rPWOWpLPVV9AJXjp8NKik7wkagTBPk5k8lIfWBfPSbY0K3PyzV2jXe5qA1C9SZdtXIfVlR7riQ4anpMrAESvn3KH9sCg4~VhitYWkCJT6ae5-vcxkpNkjInNSY2FfWP~hpWadnf5DBZs7Ck9t92~vgvZvSyZ0Pg1OdRN~TigCrKBW06it-Lg0H3lCGc-LNA__',
    },
    {
      id: 8,
      title: 'Gimme Danger: История Игги и The Stooges',
      duration: '1ч 42м',
      image: 'https://s3-alpha-sig.figma.com/img/db51/87fa/f8c41998d6d82176e93f868814bf1d2b?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pCMvDSvHmWohG18uPxGcLgEbZ5Gts0X8-xGENxCj18ZTp5zuUi8eA0oj7N9P8bWJe6p1pa-IlYg7BKepn1PiFt-QLYJVXq64G6~cWQBeu7U26dIY0uXAyqo2FgKQK8p5wLhAwdse1LttoxSTeqWIY-GP~ipkRDTqAPyPyX20j~WIlnePtWJ5MX~NTb9XrygVgLM738RtR6ogz80n98Hc-gf8dQ0Rvo~oTorhVijbOZkTJGj6bqq20oNBnWpGkY7ZvFwht-Sfl~5yvM9nmjhvEa0AOnSE6iS3tEU1vYdbuudr0xQwj7Q~J8qIdkucjaDAgEuDOMlD8hWNV3p3B~pLrQ__',
    },
    {
      id: 9,
      title: 'Дженис: Маленькая девочка грустит',
      duration: '1ч 42м',
      image: 'https://s3-alpha-sig.figma.com/img/8604/c3a8/492a130e904f2edf96264863e930e51f?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e-LQQlTihpukYmTbuSeFpJy1r-lPQOyNC2BubWsT~C3D8mGvK2B8vbE0irAJNtMwyh3EOrOGzyOslqFKUZ1DRWd6n~nnZIH~qKjjbIhek1irnLV7eciEG11GputEsFMz2gpMxQbIxrXGCoLP5xyGos9egA-uF85FdfGCAWwPaGACuMPryPtSgxeNN5hptP6osTQrRq4hY~IutRgEKqh9aHet4ILq57cuiIkeqyOITlUvT1nB4awmbH99MIgqe5nWQUBJArJzCLWSSifyIG1oVNEjGPDDhMAOnFZYxGovty~cJTrrV5zxGFU8MZYvlsKRKoFvnLnDU5RKCq~nhzj1ng__',
    },
    {
      id: 10,
      title: 'Соберись перед прыжком',
      duration: '1ч 42м',
      image: 'https://s3-alpha-sig.figma.com/img/532b/0b33/a7e2023e9428929e8632172735ff18f5?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DBg3mEKQbZ76VKCiUT9q7-GPeATPX00PUhF2eVlTnmRWa8aBK9equFHoNWRTdVdP2z~peQVOSubMLONdscRpSI74rWQT-L17gB55HEI0SpnoYZbfxY4PD70-cDhUbxNxU~cZAeIvoLCr40mgrUDklqaFMg85CQFDgBr6tsosoc~Qmgsu19wyBP9kIV9k5t2ZuIjVvuYZnXaifr7m0ClhANiunPUn7J58i~Aa7prKW09GG87azrd3K0eUSJavP9hARlbhkoAfEWJbldMeSMpO3Mscf6ob~M85zZhHOggDwiNgu0L4~h8aUQgc-W2tONzCD-jL2cvjEPxcBKxAEnB03Q__',
    },
    {
      id: 11,
      title: 'Пи Джей Харви: A dog called money',
      duration: '1ч 42м',
      image: 'https://s3-alpha-sig.figma.com/img/ff18/63df/9c469b036f5505dd9a947241f21f8245?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Uur-nm84sMQbB1XjCBxCnwN8QIBXAqEaGyAImJRDsghtxmy-fPP6szmpBpQa7YZnj3rjnWI03sw3PyL2i3tVBz06Kfaf0g99NwN9zb8Zc1MmALIJ4tBdaCv2l2L3hQs7pXXyYdnDsUJ2EoTpSoU1Hjt82S-HYamYbsTRTJKZ2M7E536YWhLaEcRe6NyRhSt~posOt4Az9ufhof~A-dbsPHbxquULqeR858IZhQxlnSz4wZHObqLLrGcaMl8Oh5TXpE-1BW2DVfbPuTCITYWS9qxF7bwVOVE81OXYJmFZnP7O~emckBpIkdip~zyeo-ONNTJMbWiYL84bVG-5xK7Yzg__',
    },
    {
      id: 12,
      title: 'По волнам: Искусство звука в кино',
      duration: '1ч 42м',
      image: 'https://s3-alpha-sig.figma.com/img/9f37/4383/9cbecda3e33558c8bfcc052f8002c008?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VTsKFV7DG6sv4oNRKXmJFhxV1K9ho71iJHE7jcUrXXiyBa65goCSiB3v2aspZGFmqM8DNHqHJPLTy5vjjay5nDxgvK96ANHSpKwGz7LcxCHFvy-WMMp6~1FnpyBuhx-IHUka2jbm5LhluWeh2dNF5Qbgsf6wozLDZm-vrDUU~SEU~ddMg1GM88maKYq~phCNbK-G1nA~OOds2OGSBPls~lf4mODlTVi3sg4vbP1WzJeNHtI1joJ8r4DP6mrCbbHhUccE-fdHa8s4R17cJy7cdPuJAxabGWZOgzOAlSopH1X5OF5DGf2PKwRf6K67rhMwjBZMPAsr45AfQATu4Tscjg__',
    },
    {
      id: 13,
      title: 'Рудбой',
      duration: '1ч 42м',
      image: 'https://s3-alpha-sig.figma.com/img/15e7/907e/a155d35bb2900a7523c41e586e62a5a7?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cXME4a8POacyBi0HrS2UMkDKUjZ1HKCDERV8hrnZZJNBCqz~72Xz3GnRdC9mkGGAVn72qdNAmgZjDfPV0EV8zvMN61-mSU7f3PBdQ5dkiJtWWIp9pyndWyW12zU9q1hdgFBHvCtvkxvAPpL9z15UIdJ9M4Qek36cLnI~w8wnesMvKnyn0U15jEds54LL0T5IhpPV6KXjbjOVQgJ6J7CxH1Z5cdonjUeWYS67TGMFJuxlhIzJd0004GsIehJgVVP9OkMfyBGa3Q6YyEV3zLYWtjxcZu4QMgXId-jNzBDC7432ofNOOCkzUKydn9Tc-DLceLOne42a1fpEXGVj4E41~A__',
    },
    {
      id: 14,
      title: 'Скейт — кухня',
      duration: '1ч 42м',
      image: 'https://s3-alpha-sig.figma.com/img/6380/fa53/8ad8f141ae7babcf9a109cb6e6f760e7?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Af1ylOp3TbYsPXrPOw~t1YfTWxWpbezOmOkYTf5r2iKN~1FWVpDtIQCAvbKaITbyql052Gpr0t7r7h22DFVG8GKGDEfMZffqt2vci2JM9W57UmVNfc96ZJndRK5pVVwIpXOOnNpRvEmNoLPAifqKYITjizoSmzFbwQYwfhRnUl7M~P7cTWWzB07qJAPHG0Tu4fnNIFUqRCFeoKGi84ym4oSttbMUlj5A-XsZPjwBpJ8nJWHJwnZSyIfFxFiFqwNKM52BCTF~xqRBFZFYtSkp8FRw-92u4y2z34Xo3rRIYvF4VB~4xPInGKwWNGQfPTX2R9NqxXtFl0s5YkE3fL17vw__',
    },
    {
      id: 15,
      title: 'Война искусств',
      duration: '1ч 42м',
      image: 'https://s3-alpha-sig.figma.com/img/ab88/283d/4aab68a30ea43a46bde9dae287117202?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aEXHm30ji64SwRSind8p32cVgvhQ4JFtitA7bH0KV5U-GS~IlGJwWYpaqTKLFSPAsHu~r4IllmjRgqzPf5Aqix9QbtXFyDTmtV~t9DAGWAIp25NqnoZJMUdZGPX-Izu9Jzi9Qb96QDsEdGmy3cfVb5j6ROp0l1IaEOuag2Ojs5foTz4ljP260gmkOp5jJPl1qO0i-B8UzXzHVPpcsWLa-Sohfdwn7CM1uf-5JtWyRBxA-koRTFHsMO8INq8YvE9B4skWvXDrpjfAYy1xw9FLdvBIKvzfGFNueqNi6vYgYwTBnUVdN71CVhymKbFN3n2gwAGih0dTENn~ZXSjjdzZCw__',
    },
    {
      id: 16,
      title: 'Зона',
      duration: '1ч 42м',
      image: 'https://s3-alpha-sig.figma.com/img/55cf/5d6f/979762a87e125d70efcb27da8d89c745?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=akigguTYBv~Fs9ecPEbxJ9ASdZ0TIO8GGjCVs7x6EWqq8pYNUlBfGo0hDbRHspqJYEyAwhjCGtbpgsdhu-9sc655GJekfvbxNfibS-N865HJNy4KUXJnhEopkweR6gSjcrKCPl2epbHsuIW-b94qFzO~13EgPs2hnwq~GwHna6UUDCv7MOvhVmqUmPx0HSVFdYBmC8Ry6ErExP4ylxoB5lzonRJtExUkzHhG0ghhzV7JWeQW-cpMadXdY7DnCzbknHeyPh0hX3rxE4URuKRkoXxn7d9XD1k96EwT0ecQFmXCFLWyWT1EBr0gR-fXf-X1IwBczrkzqmG-bcPSES5kjw__',
    },
  ];
  
  export default movies;