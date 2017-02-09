﻿function turnRules(){
//////////////////////////
	//RuleSet
	//////////////////////////
	//need for both
	//OSVars.ruleset[][] = true;

/*
	//masuda ver
	//left to right size 18
	var r6=0;
	OSVars.ruleset[3][102]=true;
	OSVars.ruleset[2][101]=true;
	OSVars.ruleset[6][201]=true;
	OSVars.ruleset[9][4]=true;
	OSVars.ruleset[7][202]=true;
	OSVars.ruleset[11][102]=true;
	OSVars.ruleset[12][7]=true;
	OSVars.ruleset[2][5]=true;
	OSVars.ruleset[14][11]=true;
	OSVars.ruleset[15][10]=true;
	OSVars.ruleset[18][205]=true;
	OSVars.ruleset[15][17]=true;

	//
	OSVars.ruleset[2][212]=true;
	OSVars.ruleset[3][212]=true;
	OSVars.ruleset[5][205]=true;
	OSVars.ruleset[4][204]=true;
	OSVars.ruleset[5][204]=true;
	OSVars.ruleset[5][8]=true;
	OSVars.ruleset[7][5]=true;
	OSVars.ruleset[7][4]=true;
	OSVars.ruleset[10][101]=true;
	OSVars.ruleset[1][10]=true;
	OSVars.ruleset[10][2]=true;
	OSVars.ruleset[13][7]=true;
	OSVars.ruleset[11][8]=true;
	OSVars.ruleset[6][14]=true;
	OSVars.ruleset[17][6]=true;
	OSVars.ruleset[15][6]=true;
	OSVars.ruleset[5][18]=true;
	OSVars.ruleset[12][203]=true;
*/


//masuda ver
	
	var r6=700;
    var r6_2=720;
    var r6_sp = 750;
    var rss = 2400;//+2000
    var l6 =1800;//+1000
    var l6_sp=1850;//+1000
    var lsg = 2200;//+2000
    var glider_r= 1000;
    var glider_turn_r = 1100;
    var glider_turn_l = 1150;
    var glider_sp =1200;
    var glider_tau_r=1300;
    var rgs =1600;//+1000
    var sl4 = 900;
    var sp2 =1250;
    var sp3 =1260;
    var sl4_sp = 950;
    var lss = 2100;//+2000
    var rsg =2500;//+2000
    var lgs=2300;//+2000
    var last_tau = 1400;
    var last_tau_turn = 1450;
    
    ColorChange(701,740,'green');
    ColorChange(800,840,'green');
    ColorChange(1000,1050,'green');
    ColorChange(1100,1200,'purple');
    
    ColorChange(1300,1350,'green');
    ColorChange(901,940,'green');
    ColorChange(1400,1450,'purple');
    



    //r6_2 size 18
    OSVars.ruleset[9+r6_2][4+r6_2]=true;
    OSVars.ruleset[12+r6_2][7+r6_2]=true;
    OSVars.ruleset[2+r6_2][5+r6_2]=true;
    OSVars.ruleset[14+r6_2][11+r6_2]=true;
    OSVars.ruleset[15+r6_2][10+r6_2]=true;
    OSVars.ruleset[15+r6_2][17+r6_2]=true;
    OSVars.ruleset[2+r6_2][5+r6_2]=true;
    OSVars.ruleset[2+r6_2][17+r6_sp]=true;
    OSVars.ruleset[3+r6_2][16+r6_sp]=true;
    OSVars.ruleset[2+r6_2][17+r6_2]=true;
    OSVars.ruleset[3+r6_2][16+r6_2]=true;

    //
    OSVars.ruleset[18+r6_2][13+r6_2]=true;
    OSVars.ruleset[10+r6_2][17+r6_2]=true;
    OSVars.ruleset[10+r6_2][17+r6_sp]=true;
    OSVars.ruleset[5+r6_2][8+r6_2]=true;
    OSVars.ruleset[7+r6_2][5+r6_2]=true;
    OSVars.ruleset[7+r6_2][4+r6_2]=true;
    OSVars.ruleset[1+r6_2][10+r6_2]=true;
    OSVars.ruleset[10+r6_2][2+r6_2]=true;
    OSVars.ruleset[13+r6_2][7+r6_2]=true;
    OSVars.ruleset[11+r6_2][8+r6_2]=true;
    OSVars.ruleset[6+r6_2][14+r6_2]=true;
    OSVars.ruleset[17+r6_2][6+r6_2]=true;
    OSVars.ruleset[15+r6_2][6+r6_2]=true;
    OSVars.ruleset[5+r6_2][18+r6_2]=true;
    OSVars.ruleset[2+r6_sp][17+r6_2] = true;
    OSVars.ruleset[3+r6_sp][16+r6_2] = true;








    //------------------------------------------------













    //r6 size 18
    /*
	OSVars.ruleset[3+r6][214]=true;
	OSVars.ruleset[2+r6][215]=true;
	OSVars.ruleset[6+r6][195]=true;
	OSVars.ruleset[7+r6][190]=true;
    OSVars.ruleset[11+r6][214]=true;
    OSVars.ruleset[18+r6][183]=true;
    */

    OSVars.ruleset[3+r6][841]=true;
    OSVars.ruleset[2+r6][842]=true;
    OSVars.ruleset[6+r6][689]=true;
    OSVars.ruleset[6+r6][669]=true;
    OSVars.ruleset[6+r6][684]=true;
    OSVars.ruleset[6+r6][664]=true;
    OSVars.ruleset[7+r6][664]=true;
    OSVars.ruleset[7+r6][684]=true;
    OSVars.ruleset[11+r6][841]=true;
    OSVars.ruleset[18+r6][313]=true;
    OSVars.ruleset[18+r6][359]=true;
    

    OSVars.ruleset[9+r6][4+r6]=true;
	OSVars.ruleset[12+r6][7+r6]=true;
	OSVars.ruleset[2+r6][5+r6]=true;
	OSVars.ruleset[14+r6][11+r6]=true;
	OSVars.ruleset[15+r6][10+r6]=true;
	OSVars.ruleset[15+r6][17+r6]=true;
    OSVars.ruleset[2+r6][5+r6]=true;
    OSVars.ruleset[2+r6][17+r6_sp]=true;
    OSVars.ruleset[3+r6][16+r6_sp]=true;
    OSVars.ruleset[2+r6][17+r6]=true;
    OSVars.ruleset[3+r6][16+r6]=true;

    //
    OSVars.ruleset[18+r6][13+r6]=true;
    

    //
	//
    /*
	OSVars.ruleset[2+r6][212]=true;
	OSVars.ruleset[3+r6][212]=true;
	OSVars.ruleset[5+r6][183]=true;
	OSVars.ruleset[4+r6][184]=true;
	OSVars.ruleset[5+r6][184]=true;
	OSVars.ruleset[10+r6][215]=true;
    OSVars.ruleset[12+r6][189]=true;
    OSVars.ruleset[12+r6][193]=true;
    */
    
    //繰り返し使うのに必要
    OSVars.ruleset[2+r6][9+glider_r]=true;
    OSVars.ruleset[3+r6][9+glider_r]=true;
    OSVars.ruleset[2+r6][11+glider_r]=true;
    OSVars.ruleset[3+r6][11+glider_r]=true;

    OSVars.ruleset[2+r6][10+glider_turn_l]=true;
    OSVars.ruleset[3+r6][10+glider_turn_l]=true;

    OSVars.ruleset[5+r6][3+sp3]=true;
    OSVars.ruleset[4+r6][4+sp3]=true;
    OSVars.ruleset[5+r6][4+sp3]=true;
    OSVars.ruleset[5+r6][1+sp3]=true;
    OSVars.ruleset[4+r6][6+sp3]=true;
    //OSVars.ruleset[5+r6][6+sp3]=true;

    OSVars.ruleset[10+r6][36+lgs]=true;
    
    OSVars.ruleset[12+r6][4+glider_r]=true;
    OSVars.ruleset[12+r6][6+glider_r]=true;
    OSVars.ruleset[12+r6][10+glider_r]=true;

    OSVars.ruleset[12+r6][3+glider_turn_l]=true;
    OSVars.ruleset[12+r6][9+glider_turn_l]=true;

    //OSVars.ruleset[12+r6][14]=true;
    OSVars.ruleset[18+r6][16+glider_sp]=true;
    //OSVars.ruleset[18+r6][13+glider_r]=true;
    OSVars.ruleset[18+r6][1+sp3]=true;

    OSVars.ruleset[18+r6][3+sp3]=true;
    OSVars.ruleset[3+r6][35+lgs]=true;
    OSVars.ruleset[2+r6][36+lgs]=true;
    OSVars.ruleset[11+r6][35+lgs]=true;
    OSVars.ruleset[6+r6][10+glider_r]=true;
    OSVars.ruleset[6+r6][12+glider_r]=true;
    OSVars.ruleset[6+r6][14+glider_r]=true;

    OSVars.ruleset[6+r6][7+glider_r]=true;
    OSVars.ruleset[7+r6][7+glider_r]=true;
    OSVars.ruleset[6+r6][13+glider_r]=true;
    OSVars.ruleset[7+r6][13+glider_r]=true;

    OSVars.ruleset[3+r6][8+r6]=true;
    OSVars.ruleset[18+r6][20+rsg]=true;





    OSVars.ruleset[2+r6][688]=true;
    OSVars.ruleset[2+r6][668]=true;
    OSVars.ruleset[3+r6][688]=true;
    OSVars.ruleset[3+r6][668]=true;
    OSVars.ruleset[5+r6][313]=true;
    OSVars.ruleset[5+r6][359]=true;
    OSVars.ruleset[4+r6][314]=true;
    OSVars.ruleset[4+r6][360]=true;
    OSVars.ruleset[5+r6][314]=true;
    OSVars.ruleset[5+r6][360]=true;
    OSVars.ruleset[10+r6][842]=true;

    OSVars.ruleset[4+r6][21+rsg]=true;
    OSVars.ruleset[5+r6][21+rsg]=true;
    OSVars.ruleset[5+r6][20+rsg]=true;

    OSVars.ruleset[10+r6][17+r6]=true;
    OSVars.ruleset[10+r6][17+r6_sp]=true;
    OSVars.ruleset[12+r6][683]=true;
    OSVars.ruleset[12+r6][663]=true;
    OSVars.ruleset[12+r6][687]=true;
    OSVars.ruleset[12+r6][667]=true;
    OSVars.ruleset[18+r6][300]=true;
    OSVars.ruleset[18+r6][690]=true;
    OSVars.ruleset[18+r6][670]=true;



    OSVars.ruleset[5+r6][8+r6]=true;
	OSVars.ruleset[7+r6][5+r6]=true;
	OSVars.ruleset[7+r6][4+r6]=true;
	OSVars.ruleset[1+r6][10+r6]=true;
	OSVars.ruleset[10+r6][2+r6]=true;
	OSVars.ruleset[13+r6][7+r6]=true;
	OSVars.ruleset[11+r6][8+r6]=true;
	OSVars.ruleset[6+r6][14+r6]=true;
	OSVars.ruleset[17+r6][6+r6]=true;
	OSVars.ruleset[15+r6][6+r6]=true;
	OSVars.ruleset[5+r6][18+r6]=true;





    //r6 glider_turn_lの下
    OSVars.ruleset[6+r6][9+glider_turn_l]=true;
    OSVars.ruleset[6+r6][4+glider_turn_l]=true;
    OSVars.ruleset[7+r6][4+glider_turn_l]=true;
    OSVars.ruleset[12+r6][2+glider_turn_l]=true;
    OSVars.ruleset[18+r6][3+sp3]=true;
    OSVars.ruleset[18+r6][13+glider_r]=true;
    





    
    OSVars.ruleset[2+r6_sp][17+r6] = true;
    OSVars.ruleset[3+r6_sp][16+r6] = true;
    OSVars.ruleset[2+r6_sp][17+r6_sp] = true;
    OSVars.ruleset[3+r6_sp][16+r6_sp] = true;
    OSVars.ruleset[6+r6_sp][1+r6_sp] = true;
    OSVars.ruleset[5+r6_sp][2+r6_sp] = true;
    OSVars.ruleset[8+r6_sp][5+r6_sp] = true;
    OSVars.ruleset[4+r6_sp][9+r6_sp] = true;
    OSVars.ruleset[11+r6_sp][9+r6_sp] = true;
    OSVars.ruleset[12+r6_sp][7+r6_sp] = true;
    OSVars.ruleset[14+r6_sp][11+r6_sp] = true;
    OSVars.ruleset[15+r6_sp][10+r6_sp] = true;
    OSVars.ruleset[17+r6_sp][15+r6_sp] = true;
    OSVars.ruleset[18+r6_sp][13+r6_sp] = true;

    OSVars.ruleset[18+r6_sp][3+glider_sp] = true;
    
	

    //rss size 18
    
    OSVars.ruleset[1+rss][17+r6] = true;
    OSVars.ruleset[2+rss][16+r6] = true;
    //OSVars.ruleset[2+rss][17+r6] = true;
    OSVars.ruleset[3+rss][16+r6] = true;
    OSVars.ruleset[5+rss][1+rss] = true;
    OSVars.ruleset[6+rss][4+rss] = true;
    //OSVars.ruleset[1+rss][8+rss] = true;
    OSVars.ruleset[7+rss][9+rss] = true;
    OSVars.ruleset[3+rss][8+rss] = true;
    //for both
    OSVars.ruleset[11+rss][9+rss] = true;
    OSVars.ruleset[11+rss][8+rss] = true;
    OSVars.ruleset[12+rss][10+rss] = true;
    OSVars.ruleset[13+rss][10+rss] = true;
    OSVars.ruleset[15+rss][13+rss] = true;
    OSVars.ruleset[15+rss][12+rss] = true;
    OSVars.ruleset[18+rss][8+rss] = true;
    OSVars.ruleset[18+rss][1+rss] = true;






    //l6 size 18
    //outside
    
    OSVars.ruleset[3+l6][16+rss]=true;
    OSVars.ruleset[3+l6][16+l6]=true;
    OSVars.ruleset[1+l6][16+r6]=true;
    OSVars.ruleset[1+l6][16+r6_sp]=true;
    OSVars.ruleset[6+l6][15+r6]=true;
    
    
    OSVars.ruleset[1+l6][3+rss]=true;
    OSVars.ruleset[6+l6][16+r6]=true;
    OSVars.ruleset[2+l6][5+l6]=true;
    OSVars.ruleset[9+l6][4+l6]=true;
    OSVars.ruleset[8+l6][5+l6]=true;
    OSVars.ruleset[12+l6][10+r6]=true;
    OSVars.ruleset[11+l6][8+l6]=true;
    OSVars.ruleset[15+l6][10+l6]=true;
    OSVars.ruleset[14+l6][11+l6]=true;
    OSVars.ruleset[18+l6][3+r6]=true;
    OSVars.ruleset[7+l6][10+r6]=true;
    OSVars.ruleset[13+l6][4+r6]=true;
    OSVars.ruleset[17+l6][14+l6]=true;
    OSVars.ruleset[12+l6][7+l6]=true;
    //1part up
    OSVars.ruleset[3+l6][14+r6]=true;
    OSVars.ruleset[4+l6][14+r6]=true;
    OSVars.ruleset[4+l6][13+r6]=true;
    OSVars.ruleset[5+l6][13+r6]=true;
    OSVars.ruleset[8+l6][2+l6]=true;
    OSVars.ruleset[8+l6][3+l6]=true;
    OSVars.ruleset[1+l6][10+l6]=true;

    OSVars.ruleset[10+l6][18+rss]=true;
    OSVars.ruleset[10+l6][18+l6]=true;

    //OSVars.ruleset[10+l6][17+rss]=true;
    OSVars.ruleset[14+l6][7+l6]=true;

    OSVars.ruleset[11+l6][16+rss]=true;
    OSVars.ruleset[11+l6][16+l6]=true;

    OSVars.ruleset[13+l6][9+l6]=true;
    OSVars.ruleset[18+l6][11+r6]=true;
    OSVars.ruleset[15+l6][6+l6]=true;
    OSVars.ruleset[18+l6][5+l6]=true;

    OSVars.ruleset[3+l6][16+l6_sp]=true;
    OSVars.ruleset[10+l6][18+l6_sp]=true;
    OSVars.ruleset[11+l6][16+l6_sp]=true;
    







    //l6 sp

    OSVars.ruleset[2+l6_sp][18+l6]=true;
    OSVars.ruleset[2+l6_sp][18+l6_sp]=true;
    OSVars.ruleset[3+l6_sp][16+l6]=true;
    OSVars.ruleset[3+l6_sp][16+l6_sp]=true;
    OSVars.ruleset[1+l6_sp][5+l6_sp]=true;
    OSVars.ruleset[1+l6_sp][6+l6_sp]=true;
    OSVars.ruleset[6+l6_sp][8+l6_sp]=true;
    OSVars.ruleset[9+l6_sp][4+l6_sp]=true;
    OSVars.ruleset[11+l6_sp][7+l6_sp]=true;
    OSVars.ruleset[12+l6_sp][7+l6_sp]=true;
    OSVars.ruleset[14+l6_sp][12+l6_sp]=true;
    OSVars.ruleset[15+l6_sp][10+l6_sp]=true;
    OSVars.ruleset[17+l6_sp][13+l6_sp]=true;
    OSVars.ruleset[18+l6_sp][13+l6_sp]=true;
    
    

    //lsg size 20
    OSVars.ruleset[1+lsg][841]=true;
    OSVars.ruleset[1+lsg][35+lgs]=true;
    
    OSVars.ruleset[3+lsg][16+l6]=true;
    OSVars.ruleset[5+lsg][1+lsg]=true;
    OSVars.ruleset[1+lsg][6+lsg]=true;
    OSVars.ruleset[8+lsg][6+lsg]=true;
    OSVars.ruleset[9+lsg][4+lsg]=true;

    //for 0
    
    OSVars.ruleset[11+lsg][13+lsg]=true;
    OSVars.ruleset[12+lsg][14+lsg]=true;
    OSVars.ruleset[14+lsg][16+lsg]=true;
    OSVars.ruleset[11+lsg][18+lsg]=true;
    OSVars.ruleset[13+lsg][16+lsg]=true;
    OSVars.ruleset[17+lsg][19+lsg]=true;

    //for width 3 speacer
    OSVars.ruleset[7+lsg][11+lsg]=true;
    OSVars.ruleset[7+lsg][12+lsg]=true;
    OSVars.ruleset[20+lsg][10+lsg]  = true;
    OSVars.ruleset[22+lsg][4+lsg]= true;
    OSVars.ruleset[24+lsg][22+lsg]= true;
    OSVars.ruleset[25+lsg][20+lsg]= true;
    OSVars.ruleset[26+lsg][19+lsg]= true;
    OSVars.ruleset[27+lsg][25+lsg]= true;
    OSVars.ruleset[29+lsg][23+lsg]= true;
    OSVars.ruleset[32+lsg][22+lsg]= true;
    OSVars.ruleset[35+lsg][30+lsg]= true;
    OSVars.ruleset[38+lsg][33+lsg]= true;
    OSVars.ruleset[38+lsg][34+lsg]= true;



    // OSVars.ruleset[1+lsg][3+r6]  = true;
    // OSVars.ruleset[1+lsg][11+r6]  = true;
    // OSVars.ruleset[3+lsg][24]=true;
    // OSVars.ruleset[3+lsg][15+lgs]=true;
    // OSVars.ruleset[6+lsg][17+l6]  = true;  
    // OSVars.ruleset[6+lsg][18+l6]  = true;  
    // OSVars.ruleset[7+lsg][17+l6]  = true;   
    // OSVars.ruleset[7+lsg][16+l6]  = true;   
    // OSVars.ruleset[4+lsg][9+lsg]  = true;   
    // OSVars.ruleset[5+lsg][8+lsg]  = true;   
    
    // //for both
    // OSVars.ruleset[11+lsg][7+lsg]  = true;
    // OSVars.ruleset[11+lsg][1+lsg]  = true;
    // OSVars.ruleset[12+lsg][16+l6]  = true;
    // OSVars.ruleset[12+lsg][18+l6]  = true;
    // OSVars.ruleset[14+lsg][12+lsg]  = true;
    // OSVars.ruleset[10+lsg][15+lsg]  = true;
    // OSVars.ruleset[13+lsg][17+lsg]  = true;
    // OSVars.ruleset[20+lsg][12+lsg]  = true;
    


    //glider_turn_l size 12
    OSVars.ruleset[1+glider_turn_l][6+glider_turn_l]=true;
    OSVars.ruleset[4+glider_turn_l][9+glider_turn_l]=true;
    OSVars.ruleset[7+glider_turn_l][12+glider_turn_l]=true;
    OSVars.ruleset[2+glider_turn_l][14+r6_2]=true;
    OSVars.ruleset[3+glider_turn_l][13+r6_2]=true;
    OSVars.ruleset[4+glider_turn_l][12+r6_2]=true;
    //OSVars.ruleset[4+glider_turn_l][13+r6_2]=true;
    OSVars.ruleset[4+glider_turn_l][6+glider_turn_l]=true;
    OSVars.ruleset[7+glider_turn_l][2+glider_turn_l]=true;
    
    OSVars.ruleset[6+glider_turn_l][10+r6_2]=true;
    OSVars.ruleset[8+glider_turn_l][5+sp3]=true;
    OSVars.ruleset[9+glider_turn_l][4+sp3]=true;
    OSVars.ruleset[3+glider_turn_l][4+sp3]=true;
    OSVars.ruleset[12+glider_turn_l][5+glider_turn_l]=true;
    //OSVars.ruleset[12+glider_turn_l][6+glider_turn_l]=true;
    OSVars.ruleset[11+glider_turn_l][6+glider_turn_l]=true;

    OSVars.ruleset[6+glider_turn_l][15+r6_2]=true;
    OSVars.ruleset[5+glider_turn_l][9+glider_turn_l]=true;
    

    //試行錯誤
    OSVars.ruleset[3+glider_turn_l][6+glider_turn_l]=true;
    OSVars.ruleset[7+glider_turn_l][11+glider_turn_l]=true;
    







    
    
    

    


    //glider_turn_r size 18
    OSVars.ruleset[1+glider_turn_r][6+glider_turn_r] = true;
    OSVars.ruleset[2+glider_turn_r][6+glider_turn_r] = true;
    


    OSVars.ruleset[3+glider_turn_r][36+lsg] =true;
    OSVars.ruleset[3+glider_turn_r][37+lsg] =true;
    
    
    
    OSVars.ruleset[1+glider_turn_r+3][6+glider_turn_r+3] = true;
    OSVars.ruleset[4+glider_turn_r+3][9+glider_turn_r+3] = true;
    OSVars.ruleset[5+glider_turn_r+3][2+glider_turn_r+3] = true;
    OSVars.ruleset[5+glider_turn_r+3][8+glider_turn_r+3] = true;
    
    
    OSVars.ruleset[7+glider_turn_r+3][12+glider_turn_r+3] = true;
    OSVars.ruleset[10+glider_turn_r+3][15+glider_turn_r+3] = true;
    OSVars.ruleset[2+glider_turn_r+3][6+glider_turn_r+3] = true;
    


    //
    OSVars.ruleset[5+glider_turn_r+3][11+l6] = true;
    OSVars.ruleset[5+glider_turn_r+3][12+l6] = true;
    OSVars.ruleset[7+glider_turn_r+3][4+glider_turn_r+3] = true;
    OSVars.ruleset[7+glider_turn_r+3][2+glider_turn_r+3] = true;
    OSVars.ruleset[8+glider_turn_r+3][1+glider_turn_r+3] = true;
    OSVars.ruleset[7+glider_turn_r+3][5+glider_turn_r+3] = true;
    OSVars.ruleset[6+glider_turn_r+3][9+glider_turn_r+3] = true;
    OSVars.ruleset[12+glider_turn_r+3][11+l6] = true;
//-------------------------
    OSVars.ruleset[18+glider_turn_r][13+glider_turn_r] =true;
    OSVars.ruleset[18+glider_turn_r][16+l6] =true;
    OSVars.ruleset[18+glider_turn_r][16+l6_sp] =true;
    
    
    //sp3 size 6
    OSVars.ruleset[3+sp3][13+glider_r]=true;
    OSVars.ruleset[3+sp3][9+glider_r]=true;
    OSVars.ruleset[1+sp3][6+sp3]=true;
    OSVars.ruleset[2+sp3][6+sp3]=true;
    OSVars.ruleset[6+glider_r][4+sp3]=true;
    OSVars.ruleset[10+glider_r][4+sp3]=true;
    OSVars.ruleset[3+sp3][16+glider_sp]=true;
    //OSVars.ruleset[3+sp3][12+r6_2]=true;
    OSVars.ruleset[3+sp3][10+glider_turn_l]=true;

    
    

    //ためしに左向きのグライダーへの再利用を試みる
    OSVars.ruleset[6+glider_r][13+r6_2]=true;
    OSVars.ruleset[6+glider_r][14+r6_2]=true;
    OSVars.ruleset[5+glider_r][14+r6_2]=true;
    OSVars.ruleset[15+glider_r][13+r6_2]=true;
    OSVars.ruleset[15+glider_r][9+r6_2]=true;
    //up_0
    OSVars.ruleset[9+glider_r][15+r6_2]=true;
    
        //low_0
    OSVars.ruleset[6+glider_r][16+r6_2]=true;
    
    //OSVars.ruleset[8+glider_r][11+l6]=true;
    OSVars.ruleset[9+glider_r][9+r6_2]=true;
    OSVars.ruleset[9+glider_r][4+r6_2]=true;
    OSVars.ruleset[9+glider_r][12+r6_2]=true;

    //--
    OSVars.ruleset[9+glider_r][15+r6_2]=true;
    OSVars.ruleset[9+glider_r][15+r6_2]=true;
    
    //OSVars.ruleset[18+glider_r][13+r6_2]=true;//

    //OSVars.ruleset[8+glider_r][14+r6_2]=true;
    OSVars.ruleset[6+glider_r][21+rsg]=true;
    OSVars.ruleset[10+glider_r][21+rsg]=true;
    OSVars.ruleset[8+glider_r][9+r6_2]=true;


    



    //4conf glider size 18
    
    OSVars.ruleset[6+glider_r][3+l6]=true;
    OSVars.ruleset[6+glider_r][4+l6]=true;
    OSVars.ruleset[5+glider_r][4+l6]=true;
    OSVars.ruleset[15+glider_r][3+l6]=true;
    OSVars.ruleset[15+glider_r][11+l6]=true;
    
    OSVars.ruleset[9+glider_r][2+glider_r]=true;
    OSVars.ruleset[10+glider_r][1+glider_r]=true;
    OSVars.ruleset[5+glider_r][8+glider_r]=true;
    OSVars.ruleset[15+glider_r][6+glider_r]=true;
    OSVars.ruleset[6+glider_r][2+glider_r]=true;
    
        //up_0
    OSVars.ruleset[9+glider_r][9+l6]=true;
    OSVars.ruleset[9+glider_r][13+l6]=true;
        //low_0
    OSVars.ruleset[6+glider_r][10+l6]=true;
    OSVars.ruleset[6+glider_r][14+l6]=true;
    //OSVars.ruleset[8+glider_r][11+l6]=true;
    OSVars.ruleset[9+glider_r][11+l6]=true;
    OSVars.ruleset[9+glider_r][16+l6]=true;
    OSVars.ruleset[9+glider_r][16+l6_sp]=true;
    OSVars.ruleset[9+glider_r][16+rss]=true;
    
    

    OSVars.ruleset[8+glider_r][12+l6]=true;
    OSVars.ruleset[8+glider_r][11+glider_r]=true;
    OSVars.ruleset[4+glider_r][13+glider_r]=true;
//----------------------------------------

    OSVars.ruleset[4+glider_r][9+glider_r]=true;
    OSVars.ruleset[7+glider_r][12+glider_r]=true;
    OSVars.ruleset[10+glider_r][15+glider_r]=true;
    OSVars.ruleset[6+glider_r][1+glider_r]=true;
    OSVars.ruleset[13+glider_r][18+glider_r] = true;
    
    
    
//-----------------前後に３ビーズずつつけたしたので調整
    OSVars.ruleset[9+glider_r][18+glider_r] = true;
    OSVars.ruleset[18+glider_r][16+l6_sp] = true;
    OSVars.ruleset[18+glider_r][16+l6] = true;
    
    OSVars.ruleset[3+glider_r][17+glider_sp] = true;
    OSVars.ruleset[3+glider_r][36+lsg]=true;
    OSVars.ruleset[3+glider_r][37+lsg]=true;
    
    
    //-----------












    //OSVars.ruleset[11+glider_r][15+glider_r] = true;

    

    //OSVars.ruleset[8+glider_r][11+glider_r] = true;
    //OSVars.ruleset[6+glider_r][8+glider_r] =true;
    //OSVars.ruleset[9+glider_r][5+glider_r]=true;
    //  OSVars.ruleset[12+glider_r][16+l6_sp] = true;
/*
     OSVars.ruleset[12+glider_r][4+glider_r] =true;
    OSVars.ruleset[12+glider_r][8+glider_r] =true;
    //OSVars.ruleset[1+glider_r][10+l6]=true;
    //OSVars.ruleset[1+glider_r][14+l6]=true;
*/

    //glider_sp size 18
    OSVars.ruleset[1+glider_sp][6+glider_sp] = true;
    OSVars.ruleset[4+glider_sp][9+glider_sp] = true;
    OSVars.ruleset[7+glider_sp][12+glider_sp] = true;
    OSVars.ruleset[10+glider_sp][15+glider_sp] = true;
    OSVars.ruleset[13+glider_sp][18+glider_sp] = true;
    OSVars.ruleset[3+glider_sp][16+glider_sp] = true;
    

    OSVars.ruleset[3+glider_sp][16+glider_r] = true;
    OSVars.ruleset[3+glider_sp][16+glider_turn_r] = true;
    
    OSVars.ruleset[16+glider_sp][3+glider_r] = true;
    OSVars.ruleset[16+glider_sp][3+glider_turn_r] = true;


    OSVars.ruleset[3+glider_sp][13+glider_r]=true;
    OSVars.ruleset[3+glider_sp][17+glider_r]=true;
    
    OSVars.ruleset[3+glider_sp][12+r6_2] =true;
    OSVars.ruleset[3+glider_sp][9+glider_r]=true;
    OSVars.ruleset[3+glider_sp][4+r6_2]=true;
    OSVars.ruleset[3+glider_sp][10+glider_turn_l]=true;
    OSVars.ruleset[3+glider_sp][5+glider_turn_l]=true;
    



   
    //glider tau r size 18
    OSVars.ruleset[6+glider_tau_r][3+l6]=true;
    OSVars.ruleset[6+glider_tau_r][4+l6]=true;
    OSVars.ruleset[5+glider_tau_r][4+l6]=true;
    
    
    OSVars.ruleset[9+glider_tau_r][2+glider_tau_r]=true;
    OSVars.ruleset[10+glider_tau_r][1+glider_tau_r]=true;

    OSVars.ruleset[5+glider_tau_r][8+glider_tau_r]=true;
    OSVars.ruleset[15+glider_tau_r][3+l6]=true;
    OSVars.ruleset[15+glider_tau_r][6+glider_tau_r]=true;
    OSVars.ruleset[15+glider_tau_r][11+l6]=true;
    OSVars.ruleset[6+glider_tau_r][2+glider_tau_r]=true;
    
        //up_0
    OSVars.ruleset[9+glider_tau_r][9+l6]=true;
    OSVars.ruleset[9+glider_tau_r][13+l6]=true;
        //low_0
    OSVars.ruleset[6+glider_tau_r][10+l6]=true;
    OSVars.ruleset[6+glider_tau_r][14+l6]=true;
    OSVars.ruleset[8+glider_tau_r][11+l6]=true;
    OSVars.ruleset[9+glider_tau_r][11+l6]=true;
    OSVars.ruleset[9+glider_tau_r][16+l6]=true;
    OSVars.ruleset[9+glider_tau_r][16+l6_sp]=true;
    OSVars.ruleset[9+glider_tau_r][16+rss]=true;
    
    

    OSVars.ruleset[8+glider_tau_r][12+l6]=true;
    OSVars.ruleset[8+glider_tau_r][11+glider_tau_r]=true;
    OSVars.ruleset[4+glider_tau_r][13+glider_tau_r]=true;
//----------------------------------------

    OSVars.ruleset[4+glider_tau_r][9+glider_tau_r]=true;
    OSVars.ruleset[7+glider_tau_r][12+glider_tau_r]=true;
    OSVars.ruleset[10+glider_tau_r][15+glider_tau_r]=true;
    OSVars.ruleset[6+glider_tau_r][1+glider_tau_r]=true;
    OSVars.ruleset[13+glider_tau_r][18+glider_tau_r] = true;
    OSVars.ruleset[3+glider_tau_r][17+glider_r] = true;
    OSVars.ruleset[3+glider_tau_r][16+glider_r] = true;

    OSVars.ruleset[3+glider_tau_r][17+glider_turn_r] = true;
    OSVars.ruleset[3+glider_tau_r][16+glider_turn_r] = true;
    
//-----------------前後に３ビーズずつつけたしたので調整
    OSVars.ruleset[9+glider_tau_r][18+glider_tau_r] = true;
    OSVars.ruleset[18+glider_tau_r][16+l6_sp] = true;
    OSVars.ruleset[18+glider_tau_r][16+l6] = true;
    
    OSVars.ruleset[3+glider_tau_r][17+glider_sp] = true;
    
    OSVars.ruleset[18+glider_tau_r][16+rss] =true;
    OSVars.ruleset[18+glider_tau_r][14+glider_tau_r]=true;
    OSVars.ruleset[10+glider_tau_r][16+glider_tau_r]=true;
    



    //right glider to square size 22
    
    OSVars.ruleset[15+rss][3+rgs]  = true;
    OSVars.ruleset[6+rgs][1+rgs]  = true;
    OSVars.ruleset[17+glider_tau_r][3+rgs]  = true;
    //１のときに必要な結合
    OSVars.ruleset[2+rgs][14+rss]  = true;
    OSVars.ruleset[4+rgs][2+rgs]  = true;
    OSVars.ruleset[5+rgs][16+glider_tau_r]  = true;
    OSVars.ruleset[1+rgs][4+rgs]  = true;
    OSVars.ruleset[3+rgs][6+rgs]  = true;
    //all same structure after 6
    OSVars.ruleset[8+rgs][16+glider_tau_r]  = true;
    OSVars.ruleset[8+rgs][18+glider_tau_r]  = true;
    OSVars.ruleset[6+rgs][11+rgs]  = true;
    OSVars.ruleset[6+rgs][12+rgs]  = true;
    OSVars.ruleset[10+rgs][14+rgs]  = true;
    OSVars.ruleset[13+rgs][15+rgs]  = true;
    OSVars.ruleset[14+rgs][17+rgs]  = true;
    OSVars.ruleset[14+rgs][18+rgs]  = true;
    OSVars.ruleset[8+rgs][21+rgs]  = true;
    OSVars.ruleset[8+rgs][22+rgs]  = true;
    OSVars.ruleset[22+rgs][12+3+glider_tau_r]  = true;
    OSVars.ruleset[22+rgs][10+3+glider_tau_r]  = true;
    OSVars.ruleset[22+rgs][6+3+glider_tau_r]  = true;








    //short right to left size 12
    
    OSVars.ruleset[3+sl4][20+rgs]=true;
    OSVars.ruleset[1+sl4][7+3+glider_r]=true;
    OSVars.ruleset[1+sl4][9+3+glider_r]=true;
    OSVars.ruleset[1+sl4][11+3+glider_r]=true;

    OSVars.ruleset[6+sl4][7+3+glider_r]=true;
    OSVars.ruleset[6+sl4][9+3+glider_r]=true;
    OSVars.ruleset[6+sl4][11+3+glider_r]=true;
    OSVars.ruleset[12+sl4][1+3+glider_r]=true;
    OSVars.ruleset[12+sl4][3+3+glider_r]=true;
    OSVars.ruleset[12+sl4][7+3+glider_r]=true;
    OSVars.ruleset[2+sl4][5+sl4]=true;
    OSVars.ruleset[9+sl4][4+sl4]=true;
    OSVars.ruleset[8+sl4][5+sl4]=true;
    
    OSVars.ruleset[11+sl4][8+sl4]=true;
    OSVars.ruleset[7+sl4][1+3+glider_r]=true;
    OSVars.ruleset[7+sl4][7+glider_r]=true;
    OSVars.ruleset[7+sl4][7+3+glider_r]=true;
    //1part up
    OSVars.ruleset[3+sl4][10+3+glider_r]=true;
    OSVars.ruleset[3+sl4][4+3+glider_r]=true;//
    OSVars.ruleset[2+sl4][10+3+glider_r]=true;
    OSVars.ruleset[2+sl4][4+3+glider_r]=true;//
    OSVars.ruleset[6+sl4][22+rgs]=true;
    OSVars.ruleset[7+sl4][21+rgs]=true;
    OSVars.ruleset[10+sl4][4+sl4]=true;

    //--------------
    OSVars.ruleset[1+sl4][7+3+glider_tau_r]=true;
    OSVars.ruleset[1+sl4][9+3+glider_tau_r]=true;
    OSVars.ruleset[1+sl4][11+3+glider_tau_r]=true;

    OSVars.ruleset[6+sl4][7+3+glider_tau_r]=true;
    OSVars.ruleset[6+sl4][9+3+glider_tau_r]=true;
    OSVars.ruleset[6+sl4][11+3+glider_tau_r]=true;
    OSVars.ruleset[12+sl4][1+3+glider_tau_r]=true;
    OSVars.ruleset[12+sl4][3+3+glider_tau_r]=true;
    OSVars.ruleset[12+sl4][7+3+glider_tau_r]=true;
    OSVars.ruleset[7+sl4][1+3+glider_tau_r]=true;
    OSVars.ruleset[7+sl4][7+glider_tau_r]=true;
    OSVars.ruleset[7+sl4][7+3+glider_tau_r]=true;
    //1part up
    OSVars.ruleset[3+sl4][10+3+glider_tau_r]=true;
    OSVars.ruleset[3+sl4][4+3+glider_tau_r]=true;//
    OSVars.ruleset[2+sl4][10+3+glider_tau_r]=true;
    OSVars.ruleset[2+sl4][4+3+glider_tau_r]=true;//

    OSVars.ruleset[3+sl4][4+sp2]=true;

    OSVars.ruleset[6+sl4][6+sp2]=true;
    OSVars.ruleset[7+sl4][5+sp2]=true;

    //------------------------------------


    OSVars.ruleset[1+sl4][10+glider_turn_r]=true;
    OSVars.ruleset[1+sl4][12+glider_turn_r]=true;

    OSVars.ruleset[6+sl4][10+glider_turn_r]=true;
    OSVars.ruleset[6+sl4][12+glider_turn_r]=true;

    OSVars.ruleset[12+sl4][4+glider_turn_r]=true;
    
    OSVars.ruleset[7+sl4][1+3+glider_turn_r]=true;
    // OSVars.ruleset[7+sl4][7+glider_turn_r]=true;
    OSVars.ruleset[6+sl4][9+glider_turn_r]=true;
    //1part up
    OSVars.ruleset[3+sl4][11+glider_turn_r]=true;
    OSVars.ruleset[2+sl4][11+glider_turn_r]=true;








    //sp2 size 6
    
    OSVars.ruleset[1+sp2][16+glider_r]=true;
    OSVars.ruleset[1+sp2][16+glider_sp]=true;
    OSVars.ruleset[1+sp2][18+glider_r]=true;
    OSVars.ruleset[1+sp2][18+glider_sp]=true;
    
    OSVars.ruleset[3+sp2][10+sl4]=true;
    OSVars.ruleset[3+sp2][10+sl4_sp]=true;
    
    OSVars.ruleset[5+sp2][1+sp2]=true;
    OSVars.ruleset[6+sp2][1+sp2]=true;
    OSVars.ruleset[6+sp2][16+glider_r]=true;
    OSVars.ruleset[6+sp2][16+glider_sp]=true;
    OSVars.ruleset[6+sp2][18+glider_r]=true;
    OSVars.ruleset[6+sp2][18+glider_sp]=true;

    OSVars.ruleset[1+sp2][18+glider_turn_r] =true;
    OSVars.ruleset[1+sp2][16+glider_turn_r] =true;
 



    //sl4_sp size 12
    
    OSVars.ruleset[2+sl4_sp][6+sp2]=true;
    OSVars.ruleset[2+sl4_sp][12+sl4_sp]=true;
    OSVars.ruleset[3+sl4_sp][4+sp2]=true;
    OSVars.ruleset[3+sl4_sp][10+sl4_sp]=true;
    OSVars.ruleset[1+sl4_sp][5+sl4_sp]=true;
    OSVars.ruleset[1+sl4_sp][6+sl4_sp]=true;
    OSVars.ruleset[6+sl4_sp][8+sl4_sp]=true;
    OSVars.ruleset[9+sl4_sp][4+sl4_sp]=true;
    OSVars.ruleset[11+sl4_sp][7+sl4_sp]=true;
    OSVars.ruleset[12+sl4_sp][7+sl4_sp]=true;
    
    
    









    //left square to square size 18
    



    OSVars.ruleset[1+lss][102]=true;
    OSVars.ruleset[3+lss][10+sl4]=true;
    OSVars.ruleset[5+lss][1+lss]=true;
    OSVars.ruleset[1+lss][6+lss]=true;
    OSVars.ruleset[8+lss][6+lss]=true;
    OSVars.ruleset[9+lss][4+lss]=true;

    //for 0
    OSVars.ruleset[7+lss][11+lss]= true;
    OSVars.ruleset[7+lss][12+lss]= true;
    
    OSVars.ruleset[11+lss][13+lss]=true;
    OSVars.ruleset[12+lss][14+lss]=true;
    OSVars.ruleset[14+lss][16+lss]=true;
    OSVars.ruleset[11+lss][18+lss]=true;
    OSVars.ruleset[13+lss][16+lss]=true;
    OSVars.ruleset[17+lss][19+lss]=true;

    OSVars.ruleset[10+lss][20+lss]= true;
    OSVars.ruleset[9+lss][21+lss]= true;
    OSVars.ruleset[21+lss][23+lss]= true;
    OSVars.ruleset[20+lss][23+lss]= true;
    OSVars.ruleset[19+lss][24+lss]= true;
    OSVars.ruleset[22+lss][26+lss]= true;
    OSVars.ruleset[22+lss][27+lss]= true;
    OSVars.ruleset[27+lss][29+lss]= true;
    OSVars.ruleset[22+lss][29+lss]= true;
    OSVars.ruleset[9+lss][30+lss]= true;
    OSVars.ruleset[21+lss][30+lss]= true;
    OSVars.ruleset[29+lss][32+lss]= true;
    OSVars.ruleset[28+lss][33+lss]= true;
    OSVars.ruleset[35+lss][33+lss]= true;
    OSVars.ruleset[36+lss][31+lss]= true;
    OSVars.ruleset[3+lss][36+lss]= true;


    OSVars.ruleset[1+lss][3+glider_r]  = true;
    OSVars.ruleset[1+lss][3+glider_turn_r]  = true;
    


    // OSVars.ruleset[3+lss][16+lsg]  = true;     
    // OSVars.ruleset[6+lss][11+sl4]  = true;   
    // OSVars.ruleset[6+lss][12+sl4]  = true;  
    // OSVars.ruleset[7+lss][11+sl4]  = true;   
    // OSVars.ruleset[7+lss][10+sl4]  = true;   
    // OSVars.ruleset[4+lss][9+lss]  = true;   
    // OSVars.ruleset[5+lss][8+lss]  = true;   
    
    // //for both
    // OSVars.ruleset[8+lss][10+lss]  = true;
    // OSVars.ruleset[8+lss][11+lss]  = true;
    // OSVars.ruleset[13+lss][10+lss]  = true;
    // OSVars.ruleset[13+lss][11+lss]  = true;
    // OSVars.ruleset[12+lss][14+lss]  = true;
    // OSVars.ruleset[15+lss][17+lss]  = true;
    // OSVars.ruleset[12+lss][17+lss]  = true;
    // OSVars.ruleset[11+lss][18+lss]  = true;
    // OSVars.ruleset[12+lss][15+lss]  = true;

    




    //r6_2
    OSVars.ruleset[4+r6_2][20+rgs]=true;
    OSVars.ruleset[5+r6_2][20+rgs]=true;
    OSVars.ruleset[5+r6_2][19+rgs]=true;

    OSVars.ruleset[1+r6_2][10+sl4]=true;
    OSVars.ruleset[3+r6_2][34+lss]=true;
    OSVars.ruleset[2+r6_2][35+lss]=true;
    OSVars.ruleset[6+r6_2][9+sl4]=true;
    OSVars.ruleset[7+r6_2][4+sl4]=true;
    OSVars.ruleset[11+r6_2][34+lss]=true;
    OSVars.ruleset[18+r6_2][3+sp2]=true;
    

    //
    OSVars.ruleset[2+r6_2][8+sl4]=true;
    OSVars.ruleset[3+r6_2][8+sl4]=true;
    OSVars.ruleset[5+r6_2][3+sp2]=true;
    OSVars.ruleset[4+r6_2][4+sp2]=true;
    OSVars.ruleset[5+r6_2][4+sp2]=true;
    OSVars.ruleset[10+r6_2][35+lss]=true;
    OSVars.ruleset[12+r6_2][3+sl4]=true;
    OSVars.ruleset[12+r6_2][7+sl4]=true;

    OSVars.ruleset[18+r6_2][19+rgs]=true;
    OSVars.ruleset[18+r6_2][18+rgs]=true;

    OSVars.ruleset[6+r6_2][4+sl4]=true;


    
//rsg  size 23
    

    OSVars.ruleset[1+rsg][18+rgs]=true;
    // OSVars.ruleset[1+rsg][17+r6_2] = true;//OSVars.ruleset[1+rsg][206] = true;
    OSVars.ruleset[2+rsg][17+r6_2] = true;
    OSVars.ruleset[3+rsg][16+r6_2] = true;
    OSVars.ruleset[5+rsg][1+rsg] = true;
    OSVars.ruleset[6+rsg][4+rsg] = true;
    OSVars.ruleset[1+rsg][8+rsg] = true;
    OSVars.ruleset[7+rsg][9+rsg] = true;
    OSVars.ruleset[3+rsg][8+rsg] = true;
    //for both
    OSVars.ruleset[11+rsg][9+rsg] = true;
    OSVars.ruleset[11+rsg][8+rsg] = true;
    OSVars.ruleset[12+rsg][10+rsg] = true;
    OSVars.ruleset[13+rsg][10+rsg] = true;
    OSVars.ruleset[15+rsg][13+rsg] = true;
    OSVars.ruleset[15+rsg][12+rsg] = true;
    OSVars.ruleset[18+rsg][3+rsg] = true;
    OSVars.ruleset[18+rsg][1+rsg] = true;
    OSVars.ruleset[20+rsg][16+rsg] = true;
    OSVars.ruleset[23+rsg][18+rsg] = true;
    OSVars.ruleset[19+rsg][22+rsg] = true;
    






    //left glider to square size 19
    OSVars.ruleset[1+lgs][6+lgs]=true;
    OSVars.ruleset[4+lgs][9+lgs]=true;
    
    OSVars.ruleset[12+lgs][7+lgs]=true;
    OSVars.ruleset[12+lgs][8+lgs]=true;
    

    OSVars.ruleset[3+lgs][10+3+glider_r]  = true;   // はじめの割り当て
    OSVars.ruleset[3+lgs][11+3+glider_r]  = true;
    OSVars.ruleset[3+lgs][6+3+glider_r]=true;
    OSVars.ruleset[3+lgs][7+3+glider_r]=true;
    OSVars.ruleset[3+lgs][12+r6_2]=true;


    OSVars.ruleset[15+lgs][25+lss]=true;

    OSVars.ruleset[15+lgs][28+lss]=true;
    
    // OSVars.ruleset[15+lgs][11+r6_2] = true;
    // OSVars.ruleset[15+lgs][3+r6_2] = true;
    
    OSVars.ruleset[17+lgs][25+lss]  = true;
    OSVars.ruleset[14+lgs][27+lss]  = true;
    OSVars.ruleset[15+lgs][27+lss]  = true;

    // OSVars.ruleset[8+lgs][104]  = true;
 //    OSVars.ruleset[5+lgs][102]  = true;
 //    OSVars.ruleset[6+lgs][104]  = true;

   
    OSVars.ruleset[13+lgs][19+lgs] = true;
    OSVars.ruleset[13+lgs][17+lgs]  = true;
    OSVars.ruleset[14+lgs][17+lgs]  = true;
    OSVars.ruleset[15+lgs][10+lgs]  = true;
    OSVars.ruleset[16+lgs][18+lgs] = true;
    
    OSVars.ruleset[17+lgs][10+lgs]  = true;
    OSVars.ruleset[21+lgs][10+lgs] = true;
    OSVars.ruleset[21+lgs][13+lgs] = true;
    OSVars.ruleset[20+lgs][13+lgs] = true;
    OSVars.ruleset[18+lgs][11+lgs]  = true;
    
    OSVars.ruleset[18+lgs][10+lgs]  = true;
    OSVars.ruleset[19+lgs][16+lgs]  = true;

    OSVars.ruleset[22+lgs][12+lgs]=true;
    OSVars.ruleset[22+lgs][10+lgs]=true;
    OSVars.ruleset[21+lgs][24+lgs]=true;
    OSVars.ruleset[21+lgs][25+lgs]=true;
    OSVars.ruleset[26+lgs][24+lgs]=true;
    OSVars.ruleset[28+lgs][30+lgs]=true;
    OSVars.ruleset[23+lgs][30+lgs]=true;
    OSVars.ruleset[23+lgs][27+lgs]=true;
    OSVars.ruleset[23+lgs][28+lgs]=true;
    OSVars.ruleset[31+lgs][22+lgs]=true;
    OSVars.ruleset[33+lgs][29+lgs]=true;
    OSVars.ruleset[34+lgs][29+lgs]=true;
    OSVars.ruleset[34+lgs][36+lgs]=true;
    OSVars.ruleset[33+lgs][36+lgs]=true;
    OSVars.ruleset[37+lgs][32+lgs]=true;
    OSVars.ruleset[37+lgs][1+lgs]=true;
    

    

    // OSVars.ruleset[20+lgs][23+lgs] = true;
    // OSVars.ruleset[21+lgs][23+lgs] = true;
    // OSVars.ruleset[24+lgs][22+lgs] = true;
    
    // OSVars.ruleset[25+lgs][27+lgs] = true;
    // OSVars.ruleset[27+lgs][22+lgs] = true;
    // OSVars.ruleset[22+lgs][25+lgs]  = true;
    // OSVars.ruleset[28+lgs][21+lgs]  = true;
    // OSVars.ruleset[28+lgs][12+lgs] = true;


    OSVars.ruleset[3+lgs][4+r6_2]=true;
    OSVars.ruleset[3+lgs][10+glider_turn_l]=true;
    OSVars.ruleset[3+lgs][4+glider_turn_l]=true;
    OSVars.ruleset[3+lgs][5+glider_turn_l]=true;
    OSVars.ruleset[3+lgs][11+glider_turn_l]=true;
    //OSVars.ruleset[3+lgs][11+r6_2]=true;

    


    //last_tau size 17
    OSVars.ruleset[2+last_tau][17+r6_2]=true;
    OSVars.ruleset[3+last_tau][16+r6_2]=true;
    OSVars.ruleset[2+last_tau][8+sl4]=true;
    OSVars.ruleset[3+last_tau][8+sl4]=true;
    OSVars.ruleset[4+last_tau][7+sl4]=true;
    OSVars.ruleset[4+last_tau][20+rgs]=true;
    OSVars.ruleset[1+last_tau][6+last_tau]=true;
    OSVars.ruleset[6+last_tau][9+sl4]=true;
    OSVars.ruleset[6+last_tau][4+last_tau]=true;
    OSVars.ruleset[6+last_tau][3+last_tau]=true;
    OSVars.ruleset[8+last_tau][17+r6_2]=true;
    OSVars.ruleset[9+last_tau][16+r6_2]=true;
    OSVars.ruleset[5+last_tau][2+last_tau]=true;
    OSVars.ruleset[7+last_tau][4+sl4]=true;
    OSVars.ruleset[5+last_tau][3+last_tau]=true;
    OSVars.ruleset[3+last_tau][7+last_tau]=true;

    OSVars.ruleset[8+last_tau][5+last_tau]=true;
    OSVars.ruleset[9+last_tau][4+last_tau]=true;
    OSVars.ruleset[11+last_tau][9+last_tau]=true;
    OSVars.ruleset[11+last_tau][8+last_tau]=true;
    OSVars.ruleset[12+last_tau][7+last_tau]=true;
    OSVars.ruleset[12+last_tau][3+sl4]=true;
    OSVars.ruleset[10+last_tau][6+last_tau]=true;
    OSVars.ruleset[11+last_tau][5+last_tau]=true;
    OSVars.ruleset[12+last_tau][5+last_tau]=true;
    OSVars.ruleset[14+last_tau][11+last_tau]=true;
    OSVars.ruleset[15+last_tau][10+last_tau]=true;
    OSVars.ruleset[14+last_tau][20+rgs]=true;
    OSVars.ruleset[17+last_tau][12+last_tau]=true;
    OSVars.ruleset[17+last_tau][13+last_tau]=true;
    OSVars.ruleset[13+last_tau][5+last_tau]=true;
    OSVars.ruleset[14+last_tau][19+rgs]=true;
    OSVars.ruleset[13+last_tau][20+rgs]=true;
    OSVars.ruleset[14+last_tau][10+last_tau]=true;
    OSVars.ruleset[15+last_tau][19+rgs]=true;



    //last_tau_turn size 24
    //0のときに必要な結合
    OSVars.ruleset[3+last_tau_turn][18+rgs] = true;
    OSVars.ruleset[16+rgs][5+last_tau_turn] = true;
    OSVars.ruleset[6+last_tau_turn][2+last_tau_turn] = true;
    OSVars.ruleset[7+last_tau_turn][2+last_tau_turn] = true;
    OSVars.ruleset[6+last_tau_turn][9+last_tau_turn] = true;
    OSVars.ruleset[12+last_tau_turn][7+last_tau_turn] = true;
    OSVars.ruleset[12+last_tau_turn][8+last_tau_turn] = true;
    OSVars.ruleset[11+last_tau_turn][9+last_tau_turn] = true;
    OSVars.ruleset[16+last_tau_turn][9+last_tau_turn] = true;




    //１のときに必要な結合
    OSVars.ruleset[3+last_tau_turn][15+last_tau] = true;
    OSVars.ruleset[6+last_tau_turn][17+rgs] = true;
    OSVars.ruleset[4+last_tau_turn][10+last_tau_turn] = true;
    OSVars.ruleset[8+last_tau_turn][10+last_tau_turn] = true;
    OSVars.ruleset[12+last_tau_turn][4+last_tau_turn] = true;
    OSVars.ruleset[14+last_tau_turn][12+last_tau_turn] = true;
    OSVars.ruleset[14+last_tau_turn][11+last_tau_turn] = true;
    OSVars.ruleset[16+last_tau_turn][10+last_tau_turn] = true;
    OSVars.ruleset[17+last_tau_turn][15+last_tau_turn] = true;
    OSVars.ruleset[17+last_tau_turn][19+last_tau_turn] = true;
    OSVars.ruleset[19+last_tau_turn][15+last_tau_turn] = true;
    OSVars.ruleset[21+last_tau_turn][13+last_tau_turn] = true;
    OSVars.ruleset[6+last_tau_turn][17+rgs] = true;
    OSVars.ruleset[16+last_tau][3+last_tau_turn] = true;
    OSVars.ruleset[1+last_tau_turn][6+last_tau_turn] = true;
    OSVars.ruleset[8+last_tau_turn][6+last_tau_turn] = true;
    OSVars.ruleset[8+last_tau_turn][5+last_tau_turn] = true;

    OSVars.ruleset[24+last_tau_turn][13+last_tau_turn]=true;
    OSVars.ruleset[24+last_tau_turn][4+last_tau_turn]=true;
    OSVars.ruleset[24+last_tau_turn][7+last_tau_turn]=true;



    //last_tauの下のglider
    OSVars.ruleset[5+glider_r][17+last_tau]=true;
    OSVars.ruleset[6+glider_r][12+last_tau]=true;
    OSVars.ruleset[6+glider_r][11+last_tau]=true;
    OSVars.ruleset[9+glider_r][15+last_tau]=true;
    OSVars.ruleset[15+glider_r][9+last_tau]=true;
    OSVars.ruleset[6+glider_r][22+last_tau_turn]=true;
    OSVars.ruleset[10+glider_r][22+last_tau_turn]=true;
    OSVars.ruleset[15+glider_r][11+last_tau]=true;


    //last_tau_turnの下
    OSVars.ruleset[4+r6][22+last_tau_turn]=true;
    OSVars.ruleset[5+r6][22+last_tau_turn]=true;
    OSVars.ruleset[5+r6][21+last_tau_turn]=true;
    
    
    

    
    
    
    
    
    
    
    
    






























/*





    

//glider speaser
    var sp=18+23;
    OSVars.ruleset[3+sp][21+rsg]=true;
    OSVars.ruleset[1+sp][6+sp]=true;
    OSVars.ruleset[2+sp][5+sp]=true;





    //4conf glider size 12
    var af=18+23;
    OSVars.ruleset[3+af][13+r6]=true;//
    OSVars.ruleset[3+af][14+r6]=true;//
    OSVars.ruleset[2+af][14+r6]=true;//
    OSVars.ruleset[6+af][22+rsg]=true;
    OSVars.ruleset[7+af][22+rsg]=true;
    OSVars.ruleset[2+af][5+af]=true;
    OSVars.ruleset[12+af][13+r6]=true;//
    OSVars.ruleset[12+af][3+af]=true;
    OSVars.ruleset[12+af][9+r6]=true;//
    OSVars.ruleset[3+af][22+rsg]=true;
    
        //up_0
    OSVars.ruleset[6+af][15+r6]=true;
        //low_0
    OSVars.ruleset[3+af][16+r6]=true;
    OSVars.ruleset[5+af][9+r6]=true;//
    OSVars.ruleset[6+af][9+r6]=true;//
    OSVars.ruleset[5+af][10+r6]=true;//
    OSVars.ruleset[5+af][8+af]=true;
    OSVars.ruleset[1+af][10+af]=true;

    OSVars.ruleset[1+af][6+af]=true;
    OSVars.ruleset[4+af][9+af]=true;
    OSVars.ruleset[7+af][12+af]=true;
    OSVars.ruleset[3+af][21+rsg]=true;










//left to right size 18 ２回目
	var r6_2=lgs+19;
	OSVars.ruleset[3+r6_2][17+lgs]=true;
	OSVars.ruleset[2+r6_2][18+lgs]=true;
	OSVars.ruleset[6+r6_2][9+af]=true;
	OSVars.ruleset[6+r6_2][7+af]=true;
	OSVars.ruleset[6+r6_2][11+af]=true;
	OSVars.ruleset[9+r6_2][4+r6_2]=true;
	OSVars.ruleset[7+r6_2][4+af]=true;//
	OSVars.ruleset[7+r6_2][6+af]=true;//
	OSVars.ruleset[11+r6_2][17+lgs]=true;
	OSVars.ruleset[12+r6_2][7+r6_2]=true;
	OSVars.ruleset[2+r6_2][5+r6_2]=true;
	OSVars.ruleset[14+r6_2][11+r6_2]=true;
	OSVars.ruleset[15+r6_2][10+r6_2]=true;
	OSVars.ruleset[18+r6_2][20+rsg]=true;
	OSVars.ruleset[15+r6_2][17+r6_2]=true;

	//
	OSVars.ruleset[2+r6_2][10+af]=true;//
	OSVars.ruleset[2+r6_2][8+af]=true;//
	OSVars.ruleset[3+r6_2][10+af]=true;//
	OSVars.ruleset[3+r6_2][8+af]=true;//
	OSVars.ruleset[5+r6_2][20+rsg]=true;
	OSVars.ruleset[4+r6_2][21+rsg]=true;
	OSVars.ruleset[5+r6_2][21+rsg]=true;
	OSVars.ruleset[5+r6_2][8+r6_2]=true;
	OSVars.ruleset[7+r6_2][5+r6_2]=true;
	OSVars.ruleset[7+r6_2][4+r6_2]=true;
	OSVars.ruleset[10+r6_2][18+lgs]=true;
	OSVars.ruleset[1+r6_2][10+r6_2]=true;
	OSVars.ruleset[10+r6_2][2+r6_2]=true;
	OSVars.ruleset[13+r6_2][7+r6_2]=true;
	OSVars.ruleset[11+r6_2][8+r6_2]=true;
	//OSVars.ruleset[13][8]=true;
	OSVars.ruleset[6+r6_2][14+r6_2]=true;
	OSVars.ruleset[17+r6_2][6+r6_2]=true;
	OSVars.ruleset[15+r6_2][6+r6_2]=true;
	OSVars.ruleset[5+r6_2][18+r6_2]=true;
	OSVars.ruleset[12+r6_2][1+af]=true;
	OSVars.ruleset[12+r6_2][3+af]=true;
	OSVars.ruleset[12+r6_2][7+af]=true;

	OSVars.ruleset[1+r6_2][6+r6_2]=true;
    OSVars.ruleset[13+r6_2][18+r6_2]=true;





*/
};