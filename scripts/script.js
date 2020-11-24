// desktop
if (screen.width > 1351){
  VK.Widgets.Group("vk_groups", {mode: 4, wide: 0, height: "1000", width: "720", color1: 'f4f4f4', color2: '000000', color3: '3C666B', no_cover: '1'}, 182033776);
} else{
  if(screen.width > 720 ){
    VK.Widgets.Group("vk_groups", {mode: 4, wide: 2, height: "1000", width: "720", color1: 'f4f4f4', color2: '000000', color3: '3C666B', no_cover: '1'}, 182033776);
  }else{
    VK.Widgets.Group("vk_groups", {mode: 4, wide: 2, height: "1000", color1: 'f4f4f4', color2: '000000', color3: '3C666B', no_cover: '1'}, 182033776);
  }
};
var vk_community_messages = document.getElementById('vk_community_messages');
  if(screen.width > 370 ){
    VK.Widgets.CommunityMessages("vk_community_messages", 182033776, {disableExpandChatSound: "1",tooltipButtonText: "Задайте нам вопрос!"});
  }else{
    function vk_community_messages_deactive(){
      vk_community_messages.addClass('vk_community_messages_deactive');
    };

  }

