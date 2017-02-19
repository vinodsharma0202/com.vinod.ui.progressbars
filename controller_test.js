/**
 * @author Vinod Kumar
 * The purpose of this class is to test various increament decreament cases in progressbars.
 * Here are two test cases
 * 1. Check if we get the correct selected text of progress bar
 * 2. Check by updating the progress bar and then evaluate if correct value had been updated.
 */
describe("Progress Bar", function(){ 
   
   it("should Return selected progressbar i.e. progress1",function(){ 
      expect(getSelectedText('selectBar')).toEqual('progress1'); 
   }); 

   it("should Return selected progressbar i.e. progress1",function(){ 
	   changeProgressBar(20);
	      expect(document.getElementById('progress1').value).toEqual(30); 
	   }); 
});