        $(document).ready(function(){
            alert(shoe_count)
            //console.log($('#pagethreeImagearea').html());
            var inc_item=1;
            var items_cnt=0;
            var cap = cap_count;
            var dress = dress_count;
            var shoes = shoe_count;
            var comb = 0;
            var xcaplines=new Array();
            var ycaplines=new Array();            
            if (cap!=0) {
                inc_item=inc_item*cap//code
            }
            if (dress!=0) {
                inc_item=inc_item*dress//code
            }
            if (shoes!=0) {
                inc_item=inc_item*shoes//code
            }
            comb=(cap>0 || dress>0 || shoes>0)?inc_item:0;
            
            // Head Level
            var width = 100;
            drawline="<svg height='25' width='2' style='border:1px red solid;'><line x1='0' y1='0' x2='0' y2='100' style='stroke:rgb(255,102,0);stroke-width:5' /></svg></div>";
            $('.main').append("<div style='width:"+width+"%;float:left' class='newdiv0'><table cellpadding='0' cellspacing='0' border='1' width='"+width+"%'><tr><td width='"+width+"%' align='center' valign='top'><img id='head1' src='images/head/placeholder.png'/></td></tr></table></div><div><table cellpadding='0' cellspacing='0' border='1' width='100%' style='padding:0px 15px;'><tr><td  width='"+cwidth+"%'  align='center' valign='top'>"+drawline+"</td></tr></table></div>")


            
            // Cap Level
            if (cap>=1) {
                
                var cwidth = width/cap;
                //var m=1;

                for(var c=1;c<=cap;c++){
                           var cwidth = width/cap;
                           
                            $('.divCap').append("<div style='width:"+cwidth+"%;display1:block;float:left;' class='newdiv1'><table cellpadding='0' cellspacing='0' border='1' width='100%' style='padding:0px 15px;'><tr><td  width='"+cwidth+"%'  align='center' valign='top'><img src='images/cap/placeholder.png'/><div><table cellpadding='0' cellspacing='0' border='1' width='100%' style='padding:0px 15px;'><tr><td  width='"+cwidth+"%'  align='center' valign='top'>"+drawline+"</td></tr></table></div><div class='divBorder'></div></td></tr></table></div>");
                            
                             $('.divCapline').append("<div class='test' style='width:"+(((100/cap)/cap)-((100/(dress))))+"%;margin:0px auto;background-color:rgb(255,102,0);height:5px;position:relative;'></div>");
                    //$('.divCap').append("<div style='width:"+cwidth+"%;display:block;float:left;' class='newdiv1'><img src='images/cap/placeholder.png'/></div>");
                    
                          
                    // Dress Level
                    if (dress>=1) {
                       
                        var dwidth = 100/(cap*dress);
                        for(var d=1;d<=dress;d++){

                             
                                
                                    $('.divDress').append("<div style='width:"+dwidth+"%;height:150px;float:left' class='newdiv2'><table border='1' cellpadding='0' cellspacing='0' width='100%'><tr><td width='"+dwidth+"%' align='center' valign='top'><div><table cellpadding='0' cellspacing='0' border='1' width='100%' style='padding:0px 15px;'><tr><td  width='"+swidth+"%'  align='center' valign='top'>"+drawline+"</td></tr></table><center><img src='images/dress/placeholder.png'/></center><div><table cellpadding='0' cellspacing='0' border='1' width='100%' style='padding:0px 15px;'><tr><td  width='"+dwidth+"%'  align='center' valign='top'>"+drawline+"</td></tr></table></td></tr></table></div></div>");
                                    ///$('.divDress2').append("<div style='width:"+dwidth+"%;display1:block;float:left;' class='newdiv1'><table cellpadding='0' cellspacing='0' border='1' width='100%' style='padding:0px 15px;'><tr><td  width='"+dwidth+"%'  align='center' valign='top'><div><table cellpadding='0' cellspacing='0' border='1' width='100%' style='padding:0px 15px;'><tr><td  width='"+dwidth+"%'  align='center' valign='top' style='background-color1:rgb(255,102,0);'><div style='width:"+(((100/cap)/cap)-((100/(shoes*dress))))+"%;margin:0px auto;background-color:rgb(255,102,0);height:5px;position:relative;'></div></td></tr></table></div><div class='divBorder'></div></td></tr></table></div>");
                                    //$('.divDress2').append("<div style='width:"+dwidth+"%;height:5px;float:left' class='newdiv2'><table border='1' cellpadding='0' cellspacing='0' width='100%'><tr><td width='"+dwidth+"%' align='center' valign='top'><center><div class='test' style='width:"+((width/cap*dress)/4.4)+"%;margin:0px auto;background-color:green;height:5px;position:relative;'></div></center></td></tr></table></div>");
                                     //$('.divDressline').append("<div class='test' style='width:"+((width/cap*dress)/3)+"%;margin:0px auto;background-color:green;height:5px;position:relative;'></div>");
                                     
                                     var swidth = 100/(cap*shoes*dress);

                                     var cwidth = 100/comb;
                                     
                                     if(shoes>=1){
                                        

                                        
                                        for(var s=1;s<=shoes;s++){
                                                //$('.divShoes').append("<div style='width:"+swidth+"%;float:left' class='newdiv4'><table cellpadding='0' cellspacing='0' width='100%' border='1'><tr><td width='"+swidth+"%' align='center' valign='top'><div class='test' style='width:"+(swidth)+"%;margin:0px auto;background-color:green;height:5px;position:relative;float:left;'></div></td></tr></table></div>");
                                                 $('.divShoes').append("<div style='width:"+swidth+"%;height:150px;float:left' class='newdiv3'><table border='1' cellpadding='0' cellspacing='0' width='100%'><tr><td width='"+swidth+"%' align='center' valign='top'><div><table cellpadding='0' cellspacing='0' border='1' width='100%' style='padding:0px 15px;'><tr><td  width='"+swidth+"%'  align='center' valign='top'>"+drawline+"</td></tr></table><center><img src='images/shoes/placeholder.png'/></center><div><table cellpadding='0' cellspacing='0' border='1' width='100%' style='padding:0px 15px;'><tr><td  width='"+swidth+"%'  align='center' valign='top'>"+drawline+"</td></tr></table></td></tr></table></div></div>");
                                                 
                                                $('.divComb').append("<div style='width:"+cwidth+"%;float:left' class='newdiv4'><table cellpadding='0' cellspacing='0' width='100%' border='1'><tr><td width='"+cwidth+"%' align='center' valign='top'><img src='images/avatarp/placeholder.png'/></td></tr></table></div>");
                                        }
                                    }else{
                                        $('.divComb').append("<div style='width:"+cwidth+"%;float:left' class='newdiv4'><table cellpadding='0' cellspacing='0' width='100%' border='1'><tr><td width='"+cwidth+"%' align='center' valign='top'><img src='images/avatarp/placeholder.png'/></td></tr></table></div>");
                                    }
                               
                        }
                    }else{
                         if(shoes>=1){
                                       // $('.divShoesline').append("<div class='test' style='width:"+(swidth/2)+"%;margin:0px auto;background-color:green;height:5px;position:relative;'></div>");
                                        for(var s=1;s<=shoes;s++){
                                            var swidth = 100/(cap*shoes)
                                            var cwidth = 100/comb;
                                                $('.divShoes').append("<div style='width:"+swidth+"%;float:left' class='newdiv3'><table cellpadding='0' cellspacing='0' width='100%' border='1'><tr><td width='"+swidth+"%' align='center' valign='top'><img src='images/shoes/placeholder.png'/><div><table cellpadding='0' cellspacing='0' border='1' width='100%' style='padding:0px 15px;'><tr><td  width='"+cwidth+"%'  align='center' valign='top'>"+drawline+"</td></tr></table></td></tr></table></div>");
                                                
                                                $('.divComb').append("<div style='width:"+cwidth+"%;float:left' class='newdiv4'><table cellpadding='0' cellspacing='0' width='100%' border='1'><tr><td width='"+cwidth+"%' align='center' valign='top'><img src='images/avatarp/placeholder.png'/></td></tr></table></div>");
                                        }
                                    }else{
                                        $('.divComb').append("<div style='width:"+cwidth+"%;float:left' class='newdiv4'><table cellpadding='0' cellspacing='0' width='100%' border='1'><tr><td width='"+cwidth+"%' align='center' valign='top'><img src='images/avatarp/placeholder.png'/></td></tr></table></div>");
                                    }
                    }

                }

            }else{
                
                if (dress>=1) {
                       
                        var dwidth = width/(dress);
                        for(var d=1;d<=dress;d++){
                                     
                                     ///$('.divDress').append("<div style='width:"+dwidth+"%;height:150px;float:left' class='newdiv2'><table border='1' cellpadding='0' cellspacing='0' width='100%'><tr><td width='"+dwidth+"%' align='center' valign='top'><div><table cellpadding='0' cellspacing='0' border='1' width='100%' style='padding:0px 15px;'><tr><td  width='"+dwidth+"%'  align='center' valign='top'>"+drawline+"</td></tr></table><center><img src='images/dress/placeholder.png'/></center><div><table cellpadding='0' cellspacing='0' border='1' width='100%' style='padding:0px 15px;'><tr><td  width='"+dwidth+"%'  align='center' valign='top'>"+drawline+"</td></tr></table></td></tr></table></div></div>");

                                    var swidth = 100/(shoes*dress)
                                     var cwidth = 100/comb;
                                     ///$('.divDress2').append("<div style='width:"+dwidth+"%;display1:block;float:left;' class='newdiv1'><table cellpadding='0' cellspacing='0' border='1' width='100%' style='padding:0px 15px;'><tr><td  width='"+dwidth+"%'  align='center' valign='top'><div><table cellpadding='0' cellspacing='0' border='1' width='100%' style='padding:0px 15px;'><tr><td  width='"+dwidth+"%'  align='center' valign='top' style='background-color1:rgb(255,102,0);'><div style='width:"+(((100/cap)/cap)-((100/(shoes*dress))))+"%;margin:0px auto;background-color:rgb(255,102,0);height:5px;position:relative;'></div></td></tr></table></div><div class='divBorder'></div></td></tr></table></div>");
                                     
                                     if(shoes>=1){
                                        for(var s=1;s<=shoes;s++){
                                                $('.divShoes').append("<div style='width:"+swidth+"%;float:left' class='newdiv3'><table cellpadding='0' cellspacing='0' width='100%' border='1'><tr><td width='"+swidth+"%' align='center' valign='top'><img src='images/shoes/placeholder.png'/><div><table cellpadding='0' cellspacing='0' border='1' width='100%' style='padding:0px 15px;'><tr><td  width='"+swidth+"%'  align='center' valign='top'>"+drawline+"</td></tr></table></td></tr></table></div>");
                                                
                                                $('.divComb').append("<div style='width:"+cwidth+"%;float:left' class='newdiv4'><table cellpadding='0' cellspacing='0' width='100%' border='1'><tr><td width='"+cwidth+"%' align='center' valign='top'><img src='images/avatarp/placeholder.png'/></td></tr></table></div>");
                                        }
                                    }else{
                                        $('.divComb').append("<div style='width:"+cwidth+"%;float:left' class='newdiv4'><table cellpadding='0' cellspacing='0' width='100%' border='1'><tr><td width='"+cwidth+"%' align='center' valign='top'><img src='images/avatarp/placeholder.png'/></td></tr></table></div>");
                                    }
                               
                        }
                    }else{
                        
                         var swidth = 100/(shoes);
                                     var cwidth = 100/comb;
                                     
                                     if(shoes>=1){
                                        for(var s=1;s<=shoes;s++){
                                                $('.divShoes').append("<div style='width:"+swidth+"%;float:left' class='newdiv3'><table cellpadding='0' cellspacing='0' width='100%' border='1'><tr><td width='"+swidth+"%' align='center' valign='top'><img src='images/shoes/placeholder.png'/><div><table cellpadding='0' cellspacing='0' border='1' width='100%' style='padding:0px 15px;'><tr><td  width='"+swidth+"%'  align='center' valign='top'>"+drawline+"</td></tr></table></td></tr></table></div>");
                                                 
                                                $('.divComb').append("<div style='width:"+cwidth+"%;float:left' class='newdiv4'><table cellpadding='0' cellspacing='0' width='100%' border='1'><tr><td width='"+cwidth+"%' align='center' valign='top'><img src='images/avatarp/placeholder.png'/></td></tr></table></div>");
                                        }
                                    }else{
                                        $('.divComb').append("<div style='width:"+cwidth+"%;float:left' class='newdiv4'><table cellpadding='0' cellspacing='0' width='100%' border='1'><tr><td width='"+cwidth+"%' align='center' valign='top'><img src='images/avatarp/placeholder.png'/></td></tr></table></div>");
                                    }
                }
            }
            
                
        });
