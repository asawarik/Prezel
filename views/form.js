<script type="text/javascript">
 
    $(document).ready(function() {
 
    //here first get the contents of the div with name class copy-fields and add it to after "after-add-more" div class.
      $(".add-more").click(function(){ 
          var html = $(".copy-fields").html();
          $(".after-add-more").after(html);
      });
//here it will remove the current value of the remove button which has been pressed
      $("body").on("click",".remove",function(){ 
          $(this).parents(".control-group").remove();
      });
      //the thing ma bob to split into two
      $(".comparison").click(function(){ 
          var html = $(".copy-fields").html();
          $(".subtopics").after(html);
          $(".subtopics").after(html);
      });
 
    });
 
</script>