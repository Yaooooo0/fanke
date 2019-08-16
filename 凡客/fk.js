$(function () {
    let imgs =$(".gundongtu .url")
    let next =$(".anniuright")
    let prev =$(".anniuleft")
    let banner =$(".gundongtu")
    let dians=$(".yuan div")
    let index=0
    function run(type=0) {
        if(type==0){
            index+=1
            if(index>=imgs.length){
                index=0
            }
        }else{
            index-=1
            if(index<0){
                index=imgs.length-1
            }
        }
        imgs.css({
            opacity:0,
            zIndex:0
        }).eq(index).css({
            opacity:1,
            zIndex: 10
        })
    dians.css("background-color","grey").eq(index).css("background-color","#a10000")
    }
    let t=setInterval(run,2000)
    banner.hover(function () {
        clearInterval(t)
    },function () {
        t=setInterval(run,2000)
    })
    next.click(function () {
        run(0)
    })
    prev.click(function () {
        run(1)
    })
    dians.click(function () {
        let i=$(this).index()
        index=i
        imgs.css({
            opacity:0,
            zIndex:0
        }).eq(index).css({
            opacity:1,
            zIndex:10
        })
        dians.css("background-color","grey").eq(index).css("background-color","#a10000")
    })
})